import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 });
    return true;
  }
  if (entry.count >= 5) {
    return false;
  }
  entry.count++;
  return true;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildHtmlEmail(name: string, email: string, message: string): string {
  const submittedAt = new Date().toLocaleString("en-GB", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/London",
  });

  const messageHtml = escapeHtml(message).replace(/\n/g, "<br>");

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background-color:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4;padding:24px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:4px;overflow:hidden;">

        <tr>
          <td style="background-color:#2d3748;padding:24px 32px;">
            <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:bold;">New website enquiry</h1>
            <p style="margin:4px 0 0;color:#a0aec0;font-size:13px;">Graham Harris Partnership Website</p>
          </td>
        </tr>

        <tr>
          <td style="padding:24px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0;border-radius:4px;">
              <tr>
                <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#718096;font-size:13px;width:100px;">Name</td>
                <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#2d3748;font-size:14px;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#718096;font-size:13px;">Email</td>
                <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;color:#2d3748;font-size:14px;">
                  <a href="mailto:${escapeHtml(email)}" style="color:#2b6cb0;text-decoration:none;">${escapeHtml(email)}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 16px;color:#718096;font-size:13px;">Submitted</td>
                <td style="padding:12px 16px;color:#2d3748;font-size:14px;">${submittedAt}</td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding:0 32px 24px;">
            <h2 style="margin:0 0 8px;color:#2d3748;font-size:15px;font-weight:bold;">Message</h2>
            <div style="background-color:#f7fafc;border:1px solid #e2e8f0;border-radius:4px;padding:16px;color:#2d3748;font-size:14px;line-height:1.6;">
              ${messageHtml}
            </div>
          </td>
        </tr>

        <tr>
          <td style="padding:16px 32px;border-top:1px solid #e2e8f0;">
            <p style="margin:0;color:#a0aec0;font-size:11px;text-align:center;">
              Submitted via grahamharrispartnership.co.uk contact form
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, message, company } = body;

    if (company) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (typeof name !== "string" || name.trim().length === 0 || name.length > 100) {
      return NextResponse.json(
        { error: "Please provide a valid name." },
        { status: 400 }
      );
    }

    if (typeof email !== "string" || !EMAIL_REGEX.test(email) || email.length > 200) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (typeof message !== "string" || message.trim().length === 0 || message.length > 5000) {
      return NextResponse.json(
        { error: "Please provide a message (max 5000 characters)." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "noreply@grahamharrispartnership.co.uk";

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    await resend.emails.send({
      from: `Graham Harris Partnership Website <${fromEmail}>`,
      to: ["richard@grahamharrispartnership.co.uk"],
      replyTo: trimmedEmail,
      subject: `New website enquiry – ${trimmedName}`,
      html: buildHtmlEmail(trimmedName, trimmedEmail, trimmedMessage),
      text: `New website enquiry – Graham Harris Partnership\n\nName: ${trimmedName}\nEmail: ${trimmedEmail}\nSubmitted: ${new Date().toLocaleString("en-GB", { dateStyle: "long", timeStyle: "short", timeZone: "Europe/London" })}\n\nMessage:\n${trimmedMessage}\n\n---\nSubmitted via grahamharrispartnership.co.uk contact form`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
