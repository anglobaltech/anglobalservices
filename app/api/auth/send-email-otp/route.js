import nodemailer from "nodemailer";
import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email } = await req.json();
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6 digits

    // Validate that environment variables exist
    if (!process.env.SECRET_KEY || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing required environment variables (SECRET_KEY, EMAIL_USER, EMAIL_PASS). Please add them to your live server.");
      return NextResponse.json(
        { error: "Server misconfiguration. Missing environment variables." },
        { status: 500 }
      );
    }

    // Generate a hash using the SECRET_KEY from your .env.local
    const expiresAt = Date.now() + 10 * 60 * 1000; // Valid for 10 minutes
    const dataString = `${email}.${otp}.${expiresAt}`;
    const hash = crypto.createHmac("sha256", process.env.SECRET_KEY).update(dataString).digest("hex");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"AN Global Services" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Enrollment OTP Verification",
      html: `<h2>Welcome to AN Global Services</h2>
             <p>Your OTP for verification is: <strong>${otp}</strong></p>
             <p>This code will expire in 10 minutes.</p>`,
    });

    return NextResponse.json({ hash, expiresAt });
  } catch (error) {
    console.error("Email OTP Error:", error);
    return NextResponse.json({ error: "Failed to send OTP" }, { status: 500 });
  }
}