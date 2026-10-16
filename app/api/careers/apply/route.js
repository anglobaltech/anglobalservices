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
  const WINDOW = 60 * 1000; // 1 minute
  const LIMIT = 5; // 5 applications per minute per IP

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
        { success: false, message: "Too many submissions. Please wait a minute and try again." },
        { status: 429 },
      );
    }

    // Read FormData from request
    const formData = await req.formData();

    const fullName = formData.get("fullName")?.toString()?.trim() || "";
    const email = formData.get("email")?.toString()?.trim() || "";
    const phone = formData.get("phone")?.toString()?.trim() || "";
    const jobTitle = formData.get("jobTitle")?.toString()?.trim() || "General Application";
    const jobId = formData.get("jobId")?.toString()?.trim() || "";
    const experience = formData.get("experience")?.toString()?.trim() || "";
    const currentLocation = formData.get("currentLocation")?.toString()?.trim() || "";
    const qualification = formData.get("qualification")?.toString()?.trim() || "";
    const noticePeriod = formData.get("noticePeriod")?.toString()?.trim() || "";
    const linkedin = formData.get("linkedin")?.toString()?.trim() || "";
    const whyJoin = formData.get("whyJoin")?.toString()?.trim() || "";
    const resumeFile = formData.get("resume");

    // Honeypot check
    const honeypot = formData.get("hiddenField");
    if (honeypot) {
      return Response.json({ success: false, message: "Spam detected." }, { status: 400 });
    }

    // Basic validation
    if (!fullName || !email || !phone || !jobTitle) {
      return Response.json(
        { success: false, message: "Please fill in all required fields (Name, Email, Phone, Position)." },
        { status: 400 },
      );
    }

    // Name validation: no numbers
    if (/\d/.test(fullName)) {
      return Response.json(
        { success: false, message: "Full Name should not contain numbers." },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    // Phone validation: exactly 10 digits
    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length !== 10) {
      return Response.json(
        { success: false, message: "Please enter a valid 10-digit mobile number." },
        { status: 400 },
      );
    }

    // Resume check
    if (!resumeFile || typeof resumeFile === "string" || resumeFile.size === 0) {
      return Response.json(
        { success: false, message: "Please attach your resume file (PDF or DOCX)." },
        { status: 400 },
      );
    }

    // Check resume file size (max 5MB)
    const MAX_SIZE = 5 * 1024 * 1024;
    if (resumeFile.size > MAX_SIZE) {
      return Response.json(
        { success: false, message: "Resume file size exceeds the 5MB limit. Please upload a smaller file." },
        { status: 400 },
      );
    }

    const fileBuffer = Buffer.from(await resumeFile.arrayBuffer());
    const fileName = resumeFile.name || "Resume.pdf";
    const fileContentType = resumeFile.type || "application/pdf";

    const applicationId = `ANG-APP-${Date.now().toString(36).toUpperCase()}`;

    // 1. Send Email Notification with Resume Attached
    const transporter = getTransporter();
    const recipientEmails = [process.env.NOTIFY_EMAIL_1, process.env.NOTIFY_EMAIL_2].filter(Boolean);
    const destination = recipientEmails.length > 0 ? recipientEmails : [process.env.EMAIL_USER];

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
        <div style="background: linear-gradient(135deg, #0075B6 0%, #004b75 100%); padding: 24px 30px; color: #ffffff;">
          <h1 style="margin: 0; font-size: 20px; font-weight: bold; letter-spacing: -0.5px;">AN Global Services - Career Application</h1>
          <p style="margin: 6px 0 0 0; font-size: 13px; opacity: 0.9;">New candidate applied via the website Careers Portal</p>
        </div>

        <div style="padding: 28px 30px; color: #1e293b; font-size: 14px; line-height: 1.6;">
          <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px 20px; margin-bottom: 24px;">
            <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: bold; color: #64748b; text-transform: uppercase;">Position Applied For</p>
            <h2 style="margin: 0; font-size: 18px; color: #0075B6; font-weight: bold;">${jobTitle}</h2>
            <p style="margin: 4px 0 0 0; font-size: 12px; color: #64748b;">Ref ID: <strong>${applicationId}</strong> | Submitted: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
          </div>

          <h3 style="font-size: 15px; font-weight: bold; color: #0f172a; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px; margin: 20px 0 12px 0;">Candidate Information</h3>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; width: 35%; color: #64748b; font-weight: bold;">Full Name:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Email Address:</td>
              <td style="padding: 8px 0; color: #0075B6;"><a href="mailto:${email}" style="color: #0075B6; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Phone Number:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;"><a href="tel:${phone}" style="color: #0f172a; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Current Location:</td>
              <td style="padding: 8px 0; color: #0f172a;">${currentLocation || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Total Experience:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${experience || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Highest Qualification:</td>
              <td style="padding: 8px 0; color: #0f172a;">${qualification || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Notice Period:</td>
              <td style="padding: 8px 0; color: #0f172a;">${noticePeriod || "Not specified"}</td>
            </tr>
            ${linkedin ? `
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">LinkedIn / Profile:</td>
              <td style="padding: 8px 0;"><a href="${linkedin.startsWith("http") ? linkedin : "https://" + linkedin}" target="_blank" style="color: #0075B6; text-decoration: underline;">${linkedin}</a></td>
            </tr>
            ` : ""}
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Resume Attached:</td>
              <td style="padding: 8px 0; color: #059669; font-weight: bold;">📎 ${fileName} (${(resumeFile.size / 1024).toFixed(1)} KB)</td>
            </tr>
          </table>

          ${whyJoin ? `
          <h3 style="font-size: 15px; font-weight: bold; color: #0f172a; border-bottom: 2px solid #f1f5f9; padding-bottom: 8px; margin: 20px 0 12px 0;">Candidate Note / Pitch</h3>
          <div style="background-color: #f8fafc; border-left: 3px solid #0075B6; padding: 12px 16px; border-radius: 4px; font-style: italic; color: #334155;">
            ${whyJoin.replace(/\n/g, "<br>")}
          </div>
          ` : ""}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
            This application was securely received via the official AN Global Services Careers Portal.
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"AN Global Services Careers" <${process.env.EMAIL_USER}>`,
      to: destination,
      subject: `New Job Application: ${jobTitle} – ${fullName} [${applicationId}]`,
      html: emailHtml,
      attachments: [
        {
          filename: fileName,
          content: fileBuffer,
          contentType: fileContentType,
        },
      ],
    });


    return Response.json({
      success: true,
      message: "Application submitted successfully! Our recruitment team will review your profile.",
      applicationId,
    });
  } catch (error) {
    console.error("CAREERS APPLICATION ERROR:", error);
    return Response.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your application. Please try again or email us directly at info@anglobalservices.com",
      },
      { status: 500 },
    );
  }
}
