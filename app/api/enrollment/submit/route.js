// app/api/enrollment/submit/route.js
import "server-only";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// ── Lazy-load firebase-admin to avoid Turbopack bundling issues ──
async function getAdminDb() {
  const { initializeApp, getApps, cert } = await import("firebase-admin/app");
  const { getFirestore } = await import("firebase-admin/firestore");

  if (!getApps().length) {
    initializeApp({
      credential: cert(JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT)),
    });
  }

  return getFirestore();
}

export async function POST(req) {
  try {
    const formData = await req.json();

    // ══════════════════════════════════════════════════
    //  1. SAVE TO FIRESTORE with auto-increment SID
    //     Collection : "student details"
    //     Counter doc: "student details/_counter_"
    //     ID format  : SID000001, SID000002 …
    // ══════════════════════════════════════════════════
    const adminDb = await getAdminDb();

    const counterRef = adminDb.collection("student details").doc("_counter_");

    const studentId = await adminDb.runTransaction(async (transaction) => {
      const counterSnap = await transaction.get(counterRef);
      const currentCount = counterSnap.exists ? counterSnap.data().count : 0;
      const newCount = currentCount + 1;
      const sid = `SID${String(newCount).padStart(6, "0")}`;

      // Update counter
      transaction.set(counterRef, { count: newCount });

      // Save student record
      const studentRef = adminDb.collection("student details").doc(sid);
      transaction.set(studentRef, {
        studentId: sid,
        firstName:    formData.firstName,
        lastName:     formData.lastName,
        dob:          formData.dob,
        gender:       formData.gender,
        organization: formData.organization || "",
        qualification:formData.qualification,
        mobile:       formData.mobile,
        whatsapp:     formData.whatsapp,
        email:        formData.email,
        address:      formData.address,
        city:         formData.city,
        state:        formData.state,
        country:      formData.country,
        postalCode:   formData.postalCode,
        startDate:    formData.startDate,
        enrolledAt:   new Date().toISOString(),
        status:       "pending",
      });

      return sid;
    });

    // ══════════════════════════════════════════════════
    //  2. SEND EMAILS
    // ══════════════════════════════════════════════════
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ── Email to Company (both admins) ──
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0075B6; padding: 20px; border-radius: 8px 8px 0 0;">
          <h2 style="color: white; margin: 0;">New Student Enrollment</h2>
          <p style="color: #cce8f4; margin: 5px 0 0;">Student ID: <strong style="color: white;">${studentId}</strong></p>
        </div>
        <div style="background: #f9f9f9; padding: 24px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 8px 8px;">

          <h3 style="color: #0a192f; border-bottom: 2px solid #0075B6; padding-bottom: 8px;">Personal Details</h3>
          <table style="width:100%; border-collapse:collapse;">
            <tr><td style="padding:6px 0;color:#555;width:40%;"><strong>Full Name:</strong></td><td style="color:#222;">${formData.firstName} ${formData.lastName}</td></tr>
            <tr><td style="padding:6px 0;color:#555;"><strong>Date of Birth:</strong></td><td style="color:#222;">${formData.dob}</td></tr>
            <tr><td style="padding:6px 0;color:#555;"><strong>Gender:</strong></td><td style="color:#222;">${formData.gender}</td></tr>
            <tr><td style="padding:6px 0;color:#555;"><strong>Qualification:</strong></td><td style="color:#222;">${formData.qualification}</td></tr>
            <tr><td style="padding:6px 0;color:#555;"><strong>Organization:</strong></td><td style="color:#222;">${formData.organization || "—"}</td></tr>
          </table>

          <h3 style="color:#0a192f; border-bottom:2px solid #0075B6; padding-bottom:8px; margin-top:20px;">Contact Details</h3>
          <table style="width:100%; border-collapse:collapse;">
            <tr><td style="padding:6px 0;color:#555;width:40%;"><strong>Mobile:</strong></td><td style="color:#222;">${formData.mobile}</td></tr>
            <tr><td style="padding:6px 0;color:#555;"><strong>WhatsApp:</strong></td><td style="color:#222;">${formData.whatsapp}</td></tr>
            <tr><td style="padding:6px 0;color:#555;"><strong>Email:</strong></td><td style="color:#222;">${formData.email}</td></tr>
          </table>

          <h3 style="color:#0a192f; border-bottom:2px solid #0075B6; padding-bottom:8px; margin-top:20px;">Address & Availability</h3>
          <table style="width:100%; border-collapse:collapse;">
            <tr><td style="padding:6px 0;color:#555;width:40%;"><strong>Address:</strong></td><td style="color:#222;">${formData.address}</td></tr>
            <tr><td style="padding:6px 0;color:#555;"><strong>City:</strong></td><td style="color:#222;">${formData.city}</td></tr>
            <tr><td style="padding:6px 0;color:#555;"><strong>State:</strong></td><td style="color:#222;">${formData.state}</td></tr>
            <tr><td style="padding:6px 0;color:#555;"><strong>Country:</strong></td><td style="color:#222;">${formData.country}</td></tr>
            <tr><td style="padding:6px 0;color:#555;"><strong>Postal Code:</strong></td><td style="color:#222;">${formData.postalCode}</td></tr>
            <tr><td style="padding:6px 0;color:#555;"><strong>Start Date:</strong></td><td style="color:#222;">${formData.startDate}</td></tr>
          </table>

          <div style="margin-top:24px; padding:12px 16px; background:#e8f4fd; border-left:4px solid #0075B6; border-radius:4px;">
            <p style="margin:0; color:#0075B6; font-weight:bold;">Student ID: ${studentId}</p>
            <p style="margin:4px 0 0; color:#555; font-size:13px;">Enrolled on: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</p>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"AN Global Services Enrollment" <${process.env.EMAIL_USER}>`,
      to: [process.env.NOTIFY_EMAIL_1, process.env.NOTIFY_EMAIL_2].join(","),
      subject: `[${studentId}] New Enrollment: ${formData.firstName} ${formData.lastName}`,
      html: adminEmailHtml,
    });

    // ── Confirmation Email to Student ──
    const studentEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0075B6; padding: 20px; border-radius: 8px 8px 0 0;">
          <h2 style="color: white; margin: 0;">Enrollment Confirmed!</h2>
          <p style="color: #cce8f4; margin: 5px 0 0;">AN Global Services Private Limited</p>
        </div>
        <div style="background: #f9f9f9; padding: 24px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 8px 8px;">
          <p style="color:#333;">Dear <strong>${formData.firstName} ${formData.lastName}</strong>,</p>
          <p style="color:#555;">Your enrollment has been successfully submitted. Here are your details:</p>

          <div style="background:white; border:1px solid #e0e0e0; border-radius:8px; padding:16px; margin:16px 0;">
            <p style="margin:0 0 8px;"><strong style="color:#0075B6;">Student ID:</strong> <span style="font-size:18px; font-weight:bold; color:#0a192f;">${studentId}</span></p>
            <p style="margin:0 0 4px;color:#555;"><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
            <p style="margin:0 0 4px;color:#555;"><strong>Mobile:</strong> ${formData.mobile}</p>
            <p style="margin:0 0 4px;color:#555;"><strong>WhatsApp:</strong> ${formData.whatsapp}</p>
            <p style="margin:0;color:#555;"><strong>Available From:</strong> ${formData.startDate}</p>
          </div>

          <p style="color:#555;">Our team will contact you shortly on your WhatsApp number <strong>(${formData.whatsapp})</strong> to confirm your training schedule.</p>
          <p style="color:#555;">For any questions, contact us at <a href="mailto:info@anglobalservices.com" style="color:#0075B6;">info@anglobalservices.com</a></p>

          <div style="margin-top:24px; padding-top:16px; border-top:1px solid #e0e0e0;">
            <p style="margin:0;color:#888;font-size:13px;">AN Global Services Private Limited</p>
            <p style="margin:4px 0 0;color:#888;font-size:13px;">Noida, Uttar Pradesh, India</p>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"AN Global Services" <${process.env.EMAIL_USER}>`,
      to: formData.email,
      subject: `Enrollment Confirmed [${studentId}] - AN Global Services`,
      html: studentEmailHtml,
    });

    return NextResponse.json({ success: true, studentId });

  } catch (error) {
    console.error("Submission Error:", error);
    return NextResponse.json(
      { error: "Failed to submit enrollment. Please try again." },
      { status: 500 }
    );
  }
}