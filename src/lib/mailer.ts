import path from "node:path";
import fs from "node:fs/promises";
import { Resend } from "resend";

let cachedClient: Resend | null = null;
let cachedLogo: Buffer | null = null;

function getClient(): Resend {
  if (cachedClient) return cachedClient;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY missing. Set it in .env.local (and in Vercel env vars for deploys).",
    );
  }

  cachedClient = new Resend(apiKey);
  return cachedClient;
}

async function getLogo(): Promise<Buffer> {
  if (cachedLogo) return cachedLogo;
  const logoPath = path.join(process.cwd(), "public", "images", "logo.png");
  cachedLogo = await fs.readFile(logoPath);
  return cachedLogo;
}

export type SendMailArgs = {
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

export async function sendMail({ subject, html, text, replyTo }: SendMailArgs) {
  const client = getClient();
  const from =
    process.env.MAIL_FROM ?? "FLS Website <onboarding@resend.dev>";
  const to = process.env.MAIL_TO ?? "zakariyah.bello@zeaonengineering.com";
  const logo = await getLogo();

  const result = await client.emails.send({
    from,
    to: [to],
    subject,
    html,
    text,
    replyTo,
    attachments: [
      {
        filename: "logo.png",
        content: logo,
        contentId: "fls-logo",
      },
    ],
  });

  if (result.error) {
    throw new Error(result.error.message ?? "Resend API error");
  }

  return result.data;
}
