import { NextResponse } from "next/server";

const destinationUrls = {
  "wood-testing": "https://www.mqtlab.com/services/wood-testing",
  "furniture-testing": "https://www.mqtlab.com/services/furniture-testing",
  "hinges-testing": "https://www.mqtlab.com/services/hinges-testing",
  "soil-testing": "https://www.mqtlab.com/services/soil-testing",
  "concrete-paver-block-testing": "https://www.mqtlab.com/services/concrete-paver-block-testing",
  "plywood-testing": "https://www.mqtlab.com/services/plywood-testing",
  "water-testing": "https://www.mqtlab.com/services/water-testing",
  "cement-testing": "https://www.mqtlab.com/services/cement-testing",
  "aggregates-testing": "https://www.mqtlab.com/services/aggregates-testing",
};

export async function GET(request, { params }) {
  // 1. Properly await the params Promise as required by Next.js 15/16+
  const resolvedParams = await params;
  const targetSlug = resolvedParams["test-slug"];

  const targetUrl = destinationUrls[targetSlug];

  // 2. Perform a network-level HTTP redirect (Bypasses rendering entirely)
  if (targetUrl) {
    return NextResponse.redirect(targetUrl);
  } else {
    // Fallback: If the slug doesn't exist, safely send them back to the panel
    const fallbackUrl = new URL("/student-panel", request.url);
    return NextResponse.redirect(fallbackUrl);
  }
}