import nodemailer from "nodemailer";
export const runtime = "nodejs";

let transporter;

function getTransporter() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }
  return transporter;
}

const rateMap = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const WINDOW = 60 * 1000;
  const LIMIT = 5;

  if (!rateMap.has(ip)) rateMap.set(ip, []);

  const logs = rateMap.get(ip).filter((t) => now - t < WINDOW);
  logs.push(now);
  rateMap.set(ip, logs);

  return logs.length > LIMIT;
}

export async function POST(req) {
  try {
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return Response.json(
        { success: false, message: "Too many requests" },
        { status: 429 },
      );
    }

    const data = await req.json();

    const {
      enquiryId,
      name,
      email,
      phone,
      industry,
      service,
      comment,
      source = "website",
      token,
      hiddenField,
    } = data;

    if (hiddenField) {
      return Response.json({ success: false });
    }

    if (!name || !phone) {
      return Response.json(
        { success: false, message: "Invalid request" },
        { status: 400 },
      );
    }


    if (token && token !== "no-captcha") {
      const captchaRes = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
        },
      );

      const captchaData = await captchaRes.json();

      console.log("CAPTCHA:", captchaData);

      if (!captchaData.success) {
        return Response.json(
          { success: false, message: "Captcha failed" },
          { status: 400 },
        );
      }
    }

    const transporter = getTransporter();
    console.log("Sending email...");
    console.log("EMAIL_USER:", process.env.EMAIL_USER);

    await transporter.sendMail({
      from: `"AN Global Services" <${process.env.EMAIL_USER}>`,
      to: [process.env.NOTIFY_EMAIL_1, process.env.NOTIFY_EMAIL_2].filter(
        Boolean,
      ),
      subject: `New Enquiry Received – ${enquiryId}`,
      html: `
        <h2>New Enquiry</h2>
        <p><b>ID:</b> ${enquiryId}</p>
        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        ${email ? `<p><b>Email:</b> ${email}</p>` : ""}
        <p><b>Service:</b> ${industry || service}</p>
        ${comment ? `<p>${comment}</p>` : ""}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}
