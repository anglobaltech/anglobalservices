import nodemailer from "nodemailer";

export async function POST(req) {
  try {
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
    } = data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"AN Global Services" <${process.env.EMAIL_USER}>`,
      to: [process.env.NOTIFY_EMAIL_1, process.env.NOTIFY_EMAIL_2],
      subject: `New Enquiry Received – ${enquiryId}`,
      html: `
        <h2>New Enquiry Received AN Global Services</h2>

        <p><strong>Enquiry ID:</strong> ${enquiryId}</p>
        <p><strong>Source:</strong> ${source}</p>

        <hr/>

        <p><strong>Name:</strong> ${name}</p>
        ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Service:</strong> ${industry || service}</p>

        ${
          comment
            ? `<p><strong>Message:</strong></p><p>${comment}</p>`
            : ""
        }

        <br/>
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
