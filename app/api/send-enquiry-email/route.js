import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"AN Global Services" <${process.env.EMAIL_USER}>`,
      to: [
        process.env.NOTIFY_EMAIL_1,
        process.env.NOTIFY_EMAIL_2,
      ],
      subject: `New Enquiry Received – ${data.enquiryId}`,
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Enquiry ID:</strong> ${data.enquiryId}</p>
        <hr/>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Service:</strong> ${data.industry}</p>
        <p><strong>Message:</strong></p>
        <p>${data.comment}</p>
        <br/>
        <p>Source: Website Contact Page</p>
        <p><em>Auto-generated email. Do not reply.</em></p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}
