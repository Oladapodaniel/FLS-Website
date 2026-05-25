import { sendMail } from "@/lib/mailer";
import { renderEmailHtml, renderEmailText } from "@/lib/email-template";

const FACILITY_LABELS: Record<string, string> = {
  hotel: "Hotel & Hospitality",
  commercial: "Commercial Building",
  data: "Data Center",
  industrial: "Industrial Facility",
  government: "Government / Regulatory",
  other: "Other",
};

const SERVICE_LABELS: Record<string, string> = {
  testing: "System Testing & Commissioning",
  audit: "Independent Inspection & Audit",
  compliance: "Compliance & Regulatory Assurance",
  risk: "Risk Assessment & Gap Analysis",
};

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const get = (k: string) => (typeof body[k] === "string" ? (body[k] as string).trim() : "");

  const firstName = get("firstName");
  const lastName = get("lastName");
  const organization = get("organization");
  const email = get("email");
  const phone = get("phone");
  const country = get("country");
  const facility = get("facility");
  const service = get("service");
  const message = get("message");
  const timeline = get("timeline");

  if (!firstName || !lastName || !organization || !email || !phone || !country) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }

  const fullName = `${firstName} ${lastName}`;
  const fields = [
    { label: "Name", value: fullName },
    { label: "Organization", value: organization },
    { label: "Email", value: email },
    { label: "Phone", value: phone },
    { label: "Country / Region", value: country },
    { label: "Facility Type", value: FACILITY_LABELS[facility] ?? facility },
    { label: "Primary Service Interest", value: SERVICE_LABELS[service] ?? service },
    { label: "Project Timeline", value: timeline },
  ];

  const templateInput = {
    title: "New Consultation Request",
    intro: `${fullName} from ${organization} has requested a Fire & Life Safety consultation.`,
    fields,
    message: message || undefined,
  };

  try {
    await sendMail({
      subject: `New Consultation Request — ${fullName} (${organization})`,
      html: renderEmailHtml(templateInput),
      text: renderEmailText(templateInput),
      replyTo: `${fullName} <${email}>`,
    });
  } catch (err) {
    console.error("[consultation] sendMail failed", err);
    const detail = err instanceof Error ? err.message : String(err);
    const message =
      process.env.NODE_ENV === "production"
        ? "Failed to send email"
        : `Failed to send email: ${detail}`;
    return Response.json({ error: message }, { status: 500 });
  }

  return Response.json({ ok: true });
}
