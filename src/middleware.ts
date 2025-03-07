import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This is a basic authentication check. In a real app, you would want to use
// a more secure authentication method like JWT tokens or session-based auth.
export function middleware(request: NextRequest) {
  // Temporarily disabled authentication for development
  return NextResponse.next();
}

export const config = {
  matcher: "/internal/:path*",
}; 