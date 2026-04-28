import { NextRequest, NextResponse } from "next/server";
// import { withAuth } from "@/middleware/auth.middleware"; // re-enable with auth

export function middleware(_request: NextRequest) {
  // TODO: re-enable once auth token / role is available
  // const authResponse = withAuth(_request);
  // if (authResponse) return authResponse;

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|fonts|images).*)"],
};
