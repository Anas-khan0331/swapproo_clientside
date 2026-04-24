import { NextRequest, NextResponse } from "next/server";
import { ROUTES } from "@/constants/routes";

const PUBLIC_ROUTES = [ROUTES.LOGIN, ROUTES.SIGNUP, ROUTES.OTP, ROUTES.HOME, ROUTES.HOW_IT_WORKS];

export function withAuth(request: NextRequest): NextResponse | null {
  const token = request.cookies.get("accessToken")?.value;
  const { pathname } = request.nextUrl;

  const isPublic = PUBLIC_ROUTES.some((r) => pathname === r || pathname.startsWith("/trade-in"));

  if (!token && !isPublic) {
    const loginUrl = new URL(ROUTES.LOGIN, request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return null;
}
