import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, otp, hash, expiresAt } = await req.json();

    if (Date.now() > expiresAt) {
      return NextResponse.json({ error: "OTP expired" }, { status: 400 });
    }

    const dataString = `${email}.${otp}.${expiresAt}`;
    const calculatedHash = crypto.createHmac("sha256", process.env.SECRET_KEY).update(dataString).digest("hex");

    if (calculatedHash === hash) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Verification failed" }, { status: 500 });
  }
}