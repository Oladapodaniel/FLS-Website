import { sendMail } from "@/lib/mailer";
import { renderEmailHtml, renderEmailText } from "@/lib/email-template";

const ENQUIRY_LABELS: Record<string, string> = {
  audit: "Fire & Life Safety Audit",
  testing: "Commissioning & Testing",
  compliance: "Compliance Verification",
  risk: "Fire Risk Assessment",
  ongoing: "Annual Integrity Program",
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
  const company = get("company");
  const email = get("email");
  const natureOfEnquiry = get("natureOfEnquiry");
  const message = get("message");

  if (!firstName || !lastName || !email) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }

  const fullName = `${firstName} ${lastName}`;
  const fields = [
    { label: "Name", value: fullName },
    { label: "Company / Organisation", value: company },
    { label: "Email", value: email },
    { label: "Nature of Enquiry", value: ENQUIRY_LABELS[natureOfEnquiry] ?? natureOfEnquiry },
  ];

  const templateInput = {
    title: "New Website Enquiry",
    intro: `${fullName}${company ? ` from ${company}` : ""} has sent a new enquiry through the FLS website.`,
    fields,
    message: message || undefined,
  };

  try {
    await sendMail({
      subject: `New Enquiry — ${fullName}${company ? ` (${company})` : ""}`,
      html: renderEmailHtml(templateInput),
      text: renderEmailText(templateInput),
      replyTo: `${fullName} <${email}>`,
    });
  } catch (err) {
    console.error("[contact] sendMail failed", err);
    const detail = err instanceof Error ? err.message : String(err);
    const message =
      process.env.NODE_ENV === "production"
        ? "Failed to send email"
        : `Failed to send email: ${detail}`;
    return Response.json({ error: message }, { status: 500 });
  }

  return Response.json({ ok: true });
}
