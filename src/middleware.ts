import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "@/middleware/auth.middleware";

export function middleware(request: NextRequest) {
  const authResponse = withAuth(request);
  if (authResponse) return authResponse;

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|fonts|images).*)"],
};
