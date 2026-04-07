import { NextResponse } from "next/server";

export function middleware(req) {
  const ua = req.headers.get("user-agent") || "";
  const url = req.nextUrl.pathname;

  if (!url.startsWith("/api")) {
    return NextResponse.next();
  }

  if (ua.includes("Googlebot") || ua.includes("Bingbot")) {
    return NextResponse.next();
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

  if (!ua || ua.length < 10) {
    return new NextResponse("Blocked", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
