import { google } from "googleapis";

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
      service,
      comment,
      token,
      hiddenField,
    } = data;

    // honeypot
    if (hiddenField) {
      return Response.json({ success: false });
    }

    // validation
    if (!name || !phone || !token) {
      return Response.json(
        { success: false, message: "Invalid request" },
        { status: 400 },
      );
    }

    // captcha verify
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

    if (!captchaData.success) {
      return Response.json(
        { success: false, message: "Captcha failed" },
        { status: 400 },
      );
    }

    // ✅ GOOGLE SHEETS
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: "Sheet1!A:G",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            enquiryId,
            name,
            phone,
            email || "",
            service || "",
            comment || "",
            new Date().toLocaleString(),
          ],
        ],
      },
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}
