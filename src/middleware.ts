import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Strip /cs prefix from cached i18n redirects
  if (pathname.startsWith("/cs")) {
    const newPath = pathname.replace(/^\/cs/, "") || "/";
    return NextResponse.redirect(new URL(newPath, request.url), 308);
  }
}

export const config = {
  matcher: ["/cs/:path*"],
};
