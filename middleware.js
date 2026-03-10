import { NextResponse } from 'next/server'

export function middleware(req) {
  const userAgent = req.headers.get('user-agent') || ''

  const blockedBots = [
    'AhrefsBot',
    'SemrushBot',
    'MJ12bot',
    'DotBot',
    'BLEXBot',
    'MegaIndex',
    'PetalBot',
    'SeznamBot',
    'Barkrowler',
    'DataForSeoBot'
  ]

  for (const bot of blockedBots) {
    if (userAgent.includes(bot)) {
      return new Response('Blocked', { status: 403 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}