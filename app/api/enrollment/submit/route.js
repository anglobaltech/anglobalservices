// // app/api/enrollment/submit/route.js
// import "server-only";
// import nodemailer from "nodemailer";
// import { NextResponse } from "next/server";

// // ── Lazy-load firebase-admin to avoid Turbopack bundling issues ──
// async function getAdminDb() {
//   const { initializeApp, getApps, cert } = await import("firebase-admin/app");
//   const { getFirestore } = await import("firebase-admin/firestore");

//   if (!getApps().length) {
//     initializeApp({
//       credential: cert(JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT)),
//     });
//   }

//   return getFirestore();
// }

// export async function POST(req) {
//   try {
//     const formData = await req.json();

//     // ══════════════════════════════════════════════════
//     //  1. SAVE TO FIRESTORE with auto-increment SID
//     //     Collection : "student details"
//     //     Counter doc: "student details/_counter_"
//     //     ID format  : SID000001, SID000002 …
//     // ══════════════════════════════════════════════════
//     const adminDb = await getAdminDb();

//     const counterRef = adminDb.collection("student details").doc("_counter_");

//     const studentId = await adminDb.runTransaction(async (transaction) => {
//       const counterSnap = await transaction.get(counterRef);
//       const currentCount = counterSnap.exists ? counterSnap.data().count : 0;
//       const newCount = currentCount + 1;
//       const sid = `SID${String(newCount).padStart(6, "0")}`;

//       // Update counter
//       transaction.set(counterRef, { count: newCount });

//       // Save student record
//       const studentRef = adminDb.collection("student details").doc(sid);
//       transaction.set(studentRef, {
//         studentId: sid,
//         firstName:    formData.firstName,
//         lastName:     formData.lastName,
//         dob:          formData.dob,
//         gender:       formData.gender,
//         organization: formData.organization || "",
//         qualification:formData.qualification,
//         mobile:       formData.mobile,
//         whatsapp:     formData.whatsapp,
//         email:        formData.email,
//         address:      formData.address,
//         city:         formData.city,
//         state:        formData.state,
//         country:      formData.country,
//         postalCode:   formData.postalCode,
//         startDate:    formData.startDate,
//         enrolledAt:   new Date().toISOString(),
//         status:       "pending",
//       });

//       return sid;
//     });

//     // ══════════════════════════════════════════════════
//     //  2. SEND EMAILS
//     // ══════════════════════════════════════════════════
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // ── Email to Company (both admins) ──
//     const adminEmailHtml = `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//         <div style="background: #0075B6; padding: 20px; border-radius: 8px 8px 0 0;">
//           <h2 style="color: white; margin: 0;">New Student Enrollment</h2>
//           <p style="color: #cce8f4; margin: 5px 0 0;">Student ID: <strong style="color: white;">${studentId}</strong></p>
//         </div>
//         <div style="background: #f9f9f9; padding: 24px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 8px 8px;">

//           <h3 style="color: #0a192f; border-bottom: 2px solid #0075B6; padding-bottom: 8px;">Personal Details</h3>
//           <table style="width:100%; border-collapse:collapse;">
//             <tr><td style="padding:6px 0;color:#555;width:40%;"><strong>Full Name:</strong></td><td style="color:#222;">${formData.firstName} ${formData.lastName}</td></tr>
//             <tr><td style="padding:6px 0;color:#555;"><strong>Date of Birth:</strong></td><td style="color:#222;">${formData.dob}</td></tr>
//             <tr><td style="padding:6px 0;color:#555;"><strong>Gender:</strong></td><td style="color:#222;">${formData.gender}</td></tr>
//             <tr><td style="padding:6px 0;color:#555;"><strong>Qualification:</strong></td><td style="color:#222;">${formData.qualification}</td></tr>
//             <tr><td style="padding:6px 0;color:#555;"><strong>Organization:</strong></td><td style="color:#222;">${formData.organization || "—"}</td></tr>
//           </table>

//           <h3 style="color:#0a192f; border-bottom:2px solid #0075B6; padding-bottom:8px; margin-top:20px;">Contact Details</h3>
//           <table style="width:100%; border-collapse:collapse;">
//             <tr><td style="padding:6px 0;color:#555;width:40%;"><strong>Mobile:</strong></td><td style="color:#222;">${formData.mobile}</td></tr>
//             <tr><td style="padding:6px 0;color:#555;"><strong>WhatsApp:</strong></td><td style="color:#222;">${formData.whatsapp}</td></tr>
//             <tr><td style="padding:6px 0;color:#555;"><strong>Email:</strong></td><td style="color:#222;">${formData.email}</td></tr>
//           </table>

//           <h3 style="color:#0a192f; border-bottom:2px solid #0075B6; padding-bottom:8px; margin-top:20px;">Address & Availability</h3>
//           <table style="width:100%; border-collapse:collapse;">
//             <tr><td style="padding:6px 0;color:#555;width:40%;"><strong>Address:</strong></td><td style="color:#222;">${formData.address}</td></tr>
//             <tr><td style="padding:6px 0;color:#555;"><strong>City:</strong></td><td style="color:#222;">${formData.city}</td></tr>
//             <tr><td style="padding:6px 0;color:#555;"><strong>State:</strong></td><td style="color:#222;">${formData.state}</td></tr>
//             <tr><td style="padding:6px 0;color:#555;"><strong>Country:</strong></td><td style="color:#222;">${formData.country}</td></tr>
//             <tr><td style="padding:6px 0;color:#555;"><strong>Postal Code:</strong></td><td style="color:#222;">${formData.postalCode}</td></tr>
//             <tr><td style="padding:6px 0;color:#555;"><strong>Start Date:</strong></td><td style="color:#222;">${formData.startDate}</td></tr>
//           </table>

//           <div style="margin-top:24px; padding:12px 16px; background:#e8f4fd; border-left:4px solid #0075B6; border-radius:4px;">
//             <p style="margin:0; color:#0075B6; font-weight:bold;">Student ID: ${studentId}</p>
//             <p style="margin:4px 0 0; color:#555; font-size:13px;">Enrolled on: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</p>
//           </div>
//         </div>
//       </div>
//     `;

//     await transporter.sendMail({
//       from: `"AN Global Services Enrollment" <${process.env.EMAIL_USER}>`,
//       to: [process.env.NOTIFY_EMAIL_1, process.env.NOTIFY_EMAIL_2].join(","),
//       subject: `[${studentId}] New Enrollment: ${formData.firstName} ${formData.lastName}`,
//       html: adminEmailHtml,
//     });

//     // ── Confirmation Email to Student ──
//     const studentEmailHtml = `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//         <div style="background: #0075B6; padding: 20px; border-radius: 8px 8px 0 0;">
//           <h2 style="color: white; margin: 0;">Enrollment Confirmed!</h2>
//           <p style="color: #cce8f4; margin: 5px 0 0;">AN Global Services Private Limited</p>
//         </div>
//         <div style="background: #f9f9f9; padding: 24px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 8px 8px;">
//           <p style="color:#333;">Dear <strong>${formData.firstName} ${formData.lastName}</strong>,</p>
//           <p style="color:#555;">Your enrollment has been successfully submitted. Here are your details:</p>

//           <div style="background:white; border:1px solid #e0e0e0; border-radius:8px; padding:16px; margin:16px 0;">
//             <p style="margin:0 0 8px;"><strong style="color:#0075B6;">Student ID:</strong> <span style="font-size:18px; font-weight:bold; color:#0a192f;">${studentId}</span></p>
//             <p style="margin:0 0 4px;color:#555;"><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
//             <p style="margin:0 0 4px;color:#555;"><strong>Mobile:</strong> ${formData.mobile}</p>
//             <p style="margin:0 0 4px;color:#555;"><strong>WhatsApp:</strong> ${formData.whatsapp}</p>
//             <p style="margin:0;color:#555;"><strong>Available From:</strong> ${formData.startDate}</p>
//           </div>

//           <p style="color:#555;">Our team will contact you shortly on your WhatsApp number <strong>(${formData.whatsapp})</strong> to confirm your training schedule.</p>
//           <p style="color:#555;">For any questions, contact us at <a href="mailto:info@anglobalservices.com" style="color:#0075B6;">info@anglobalservices.com</a></p>

//           <div style="margin-top:24px; padding-top:16px; border-top:1px solid #e0e0e0;">
//             <p style="margin:0;color:#888;font-size:13px;">AN Global Services Private Limited</p>
//             <p style="margin:4px 0 0;color:#888;font-size:13px;">Noida, Uttar Pradesh, India</p>
//           </div>
//         </div>
//       </div>
//     `;

//     await transporter.sendMail({
//       from: `"AN Global Services" <${process.env.EMAIL_USER}>`,
//       to: formData.email,
//       subject: `Enrollment Confirmed [${studentId}] - AN Global Services`,
//       html: studentEmailHtml,
//     });

//     return NextResponse.json({ success: true, studentId });

//   } catch (error) {
//     console.error("Submission Error:", error);
//     return NextResponse.json(
//       { error: "Failed to submit enrollment. Please try again." },
//       { status: 500 }
//     );
//   }
// }













import "server-only";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

async function getAdminDb() {
  const { initializeApp, getApps, cert } = await import("firebase-admin/app");
  const { getFirestore } = await import("firebase-admin/firestore");
  if (!getApps().length) {
    initializeApp({
      credential: cert(JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT)),
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    });
  }
  return getFirestore();
}

function formatDate(dateStr) {
  if (!dateStr) return "—";
  const [y, m, d] = dateStr.split("-");
  if (!y || !m || !d) return dateStr;
  return `${d}-${m}-${y}`;
}

export async function POST(req) {
  try {
    const formData = await req.json();
    const adminDb = await getAdminDb();

    // ══════════════════════════════════════════════════
    //  1. DUPLICATE CHECK — email
    // ══════════════════════════════════════════════════
    const studentsRef = adminDb.collection("student details");

    const emailSnap = await studentsRef
      .where("email", "==", formData.email.trim().toLowerCase())
      .limit(1)
      .get();

    if (!emailSnap.empty) {
      return NextResponse.json(
        { error: "This email address is already registered. Please use a different email.", duplicate: true },
        { status: 409 }
      );
    }

    // ══════════════════════════════════════════════════
    //  2. SAVE TO FIRESTORE with auto-increment SID
    // ══════════════════════════════════════════════════
    const counterRef = adminDb.collection("student details").doc("_counter_");

    const studentId = await adminDb.runTransaction(async (transaction) => {
      const counterSnap = await transaction.get(counterRef);
      const currentCount = counterSnap.exists ? counterSnap.data().count : 0;
      const newCount = currentCount + 1;
      const sid = `SID${String(newCount).padStart(6, "0")}`;

      transaction.set(counterRef, { count: newCount });

      const studentRef = adminDb.collection("student details").doc(sid);
      transaction.set(studentRef, {
        studentId:    sid,
        firstName:    formData.firstName,
        middleName:   formData.middleName || "",
        lastName:     formData.lastName,
        dob:          formatDate(formData.dob),
        gender:       formData.gender,
        organization: formData.organization || "",
        qualification:formData.qualification,
        whatsapp:     formData.whatsapp.trim(),
        email:        formData.email.trim().toLowerCase(),
        address:      formData.address,
        city:         formData.city,
        state:        formData.state,
        country:      formData.country,
        postalCode:   formData.postalCode,
        startDate:    formatDate(formData.startDate),
        enrolledAt:   new Date().toISOString(),
        status:       "pending",
      });

      return sid;
    });

    // ══════════════════════════════════════════════════
    //  3. SEND EMAILS
    // ══════════════════════════════════════════════════
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    const fullName = [formData.firstName, formData.middleName, formData.lastName].filter(Boolean).join(" ");

    // ── Admin Email ──
    const adminHtml = `
      <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
        <div style="background:linear-gradient(135deg,#0075B6,#005f94);padding:28px 32px;">
          <h2 style="color:white;margin:0;font-size:22px;">🎓 New Student Enrollment</h2>
          <p style="color:#b3d9f0;margin:6px 0 0;font-size:14px;">Student ID: <strong style="color:white;font-size:18px;">${studentId}</strong></p>
        </div>
        <div style="background:#f8fafc;padding:28px 32px;">

          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr><td colspan="2" style="padding:0 0 10px;font-size:13px;font-weight:700;color:#0075B6;text-transform:uppercase;letter-spacing:0.05em;border-bottom:2px solid #e2e8f0;">Personal Details</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;width:40%;">Full Name</td><td style="padding:8px 0;color:#1e293b;font-size:13px;font-weight:600;">${fullName}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Date of Birth</td><td style="padding:8px 0;color:#1e293b;font-size:13px;font-weight:600;">${formatDate(formData.dob)}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Gender</td><td style="padding:8px 0;color:#1e293b;font-size:13px;font-weight:600;">${formData.gender}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Qualification</td><td style="padding:8px 0;color:#1e293b;font-size:13px;font-weight:600;">${formData.qualification}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Organization</td><td style="padding:8px 0;color:#1e293b;font-size:13px;font-weight:600;">${formData.organization || "—"}</td></tr>
          </table>

          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr><td colspan="2" style="padding:0 0 10px;font-size:13px;font-weight:700;color:#0075B6;text-transform:uppercase;letter-spacing:0.05em;border-bottom:2px solid #e2e8f0;">Contact Details</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;width:40%;">WhatsApp</td><td style="padding:8px 0;color:#1e293b;font-size:13px;font-weight:600;">+91${formData.whatsapp}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Email</td><td style="padding:8px 0;color:#1e293b;font-size:13px;font-weight:600;">${formData.email}</td></tr>
          </table>

          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr><td colspan="2" style="padding:0 0 10px;font-size:13px;font-weight:700;color:#0075B6;text-transform:uppercase;letter-spacing:0.05em;border-bottom:2px solid #e2e8f0;">Address & Availability</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;width:40%;">Address</td><td style="padding:8px 0;color:#1e293b;font-size:13px;font-weight:600;">${formData.address}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">City / State</td><td style="padding:8px 0;color:#1e293b;font-size:13px;font-weight:600;">${formData.city}, ${formData.state}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Country</td><td style="padding:8px 0;color:#1e293b;font-size:13px;font-weight:600;">${formData.country} — ${formData.postalCode}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Start Date</td><td style="padding:8px 0;color:#1e293b;font-size:13px;font-weight:600;">${formatDate(formData.startDate)}</td></tr>
          </table>

          <div style="background:#eff6ff;border-left:4px solid #0075B6;border-radius:8px;padding:16px 20px;">
            <p style="margin:0;color:#0075B6;font-weight:700;font-size:15px;">Student ID: ${studentId}</p>
            <p style="margin:6px 0 0;color:#64748b;font-size:12px;">Enrolled on: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</p>
          </div>
        </div>
      </div>`;

    await transporter.sendMail({
      from: `"AN Global Services Enrollment" <${process.env.EMAIL_USER}>`,
      to: [process.env.NOTIFY_EMAIL_1, process.env.NOTIFY_EMAIL_2].join(","),
      subject: `[${studentId}] New Enrollment: ${fullName}`,
      html: adminHtml,
    });

    // ── Student Confirmation Email ──
    const studentHtml = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
        <div style="background:linear-gradient(135deg,#0075B6,#005f94);padding:28px 32px;text-align:center;">
          <div style="width:64px;height:64px;background:rgba(255,255,255,0.2);border-radius:50%;display:inline-flex;align-items:center;justify-content:center;margin-bottom:16px;">
            <span style="font-size:32px;">🎓</span>
          </div>
          <h2 style="color:white;margin:0;font-size:22px;">Enrollment Confirmed!</h2>
          <p style="color:#b3d9f0;margin:6px 0 0;font-size:14px;">AN Global Services Private Limited</p>
        </div>
        <div style="background:#f8fafc;padding:28px 32px;">
          <p style="color:#334155;font-size:15px;">Dear <strong>${fullName}</strong>,</p>
          <p style="color:#64748b;font-size:14px;line-height:1.6;">Your enrollment has been successfully submitted. Here are your details:</p>

          <div style="background:white;border:2px solid #e2e8f0;border-radius:12px;padding:20px;margin:20px 0;text-align:center;">
            <p style="margin:0 0 4px;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;font-weight:600;">Your Student ID</p>
            <p style="margin:0;color:#0075B6;font-size:32px;font-weight:800;">${studentId}</p>
            <p style="margin:8px 0 0;color:#94a3b8;font-size:11px;">Please save this ID for future reference</p>
          </div>

          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;width:40%;">Name</td><td style="padding:8px 0;color:#1e293b;font-size:13px;font-weight:600;">${fullName}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">WhatsApp</td><td style="padding:8px 0;color:#1e293b;font-size:13px;font-weight:600;">+91${formData.whatsapp}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:13px;">Start Date</td><td style="padding:8px 0;color:#1e293b;font-size:13px;font-weight:600;">${formatDate(formData.startDate)}</td></tr>
          </table>

          <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;padding:16px 20px;margin-bottom:20px;">
            <p style="margin:0;color:#166534;font-size:13px;line-height:1.6;">✅ Our team will contact you on WhatsApp <strong>(+91${formData.whatsapp})</strong> to confirm your training schedule shortly.</p>
          </div>

          <p style="color:#64748b;font-size:13px;">Questions? Contact us at <a href="mailto:info@anglobalservices.com" style="color:#0075B6;">info@anglobalservices.com</a></p>

          <div style="border-top:1px solid #e2e8f0;margin-top:24px;padding-top:16px;">
            <p style="margin:0;color:#94a3b8;font-size:12px;">AN Global Services Private Limited · Noida, Uttar Pradesh, India</p>
          </div>
        </div>
      </div>`;

    await transporter.sendMail({
      from: `"AN Global Services" <${process.env.EMAIL_USER}>`,
      to: formData.email,
      subject: `Enrollment Confirmed [${studentId}] - AN Global Services`,
      html: studentHtml,
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