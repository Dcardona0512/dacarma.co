import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Payload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  website?: string;
  budget?: string;
  message?: string;
  /** Honeypot — always empty for real people. */
  company?: string;
};

const MAX_LENGTH = 5000;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Silently accept honeypot hits so bots get no signal to adapt to.
  if (body.company) return NextResponse.json({ ok: true });

  const firstName = body.firstName?.trim() ?? "";
  const lastName = body.lastName?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const website = body.website?.trim() ?? "";
  const budget = body.budget?.trim() ?? "";

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email and message." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "That email address doesn't look right." },
      { status: 400 },
    );
  }

  if (message.length > MAX_LENGTH) {
    return NextResponse.json({ error: "That message is too long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  // Name the missing ones. "Something is unset" costs a redeploy per guess.
  const missing = Object.entries({
    RESEND_API_KEY: apiKey,
    CONTACT_TO_EMAIL: to,
    CONTACT_FROM_EMAIL: from,
  })
    .filter(([, value]) => !value)
    .map(([name]) => name);

  if (missing.length) {
    console.error(
      `Contact form is not configured. Missing in this environment: ${missing.join(", ")}.`,
    );
    return NextResponse.json(
      { error: "The contact form isn't configured yet. Please email me directly." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const name = `${firstName} ${lastName}`;

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Portfolio enquiry from ${name}`,
    html: `
      <h2>New portfolio enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${website ? `<p><strong>Website:</strong> ${escapeHtml(website)}</p>` : ""}
      ${budget ? `<p><strong>Budget:</strong> ${escapeHtml(budget)}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    `,
  });

  if (error) {
    console.error("Resend failed to send the contact email:", error);
    return NextResponse.json(
      { error: "Couldn't send your message. Please try again shortly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
