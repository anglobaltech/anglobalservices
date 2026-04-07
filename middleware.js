import { NextResponse } from "next/server";

export function middleware(req) {
  const ua = req.headers.get("user-agent") || "";

  const allowedBots = ["Googlebot", "Bingbot"];
  for (const bot of allowedBots) {
    if (ua.includes(bot)) {
      return NextResponse.next();
    }
  }

  const badBots = [
    "AhrefsBot",
    "SemrushBot",
    "MJ12bot",
    "DotBot",
    "BLEXBot",
    "MegaIndex",
    "PetalBot",
    "SeznamBot",
    "Barkrowler",
    "DataForSeoBot",
    "python",
    "curl",
    "wget",
    "axios",
    "node-fetch",
  ];

  for (const bot of badBots) {
    if (ua.toLowerCase().includes(bot.toLowerCase())) {
      return new NextResponse("Blocked", { status: 403 });
    }
  }

  if (!ua.includes("Mozilla")) {
    return new NextResponse("Blocked", { status: 403 });
  }

  return NextResponse.next();
}