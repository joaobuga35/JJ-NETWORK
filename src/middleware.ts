import { NextRequest, NextResponse } from "next/server";
export default function middleware(request: NextRequest) {
  const cookieToken = request.cookies.has("clientToken");
    if (request.nextUrl.pathname === ("/")) {
        if (cookieToken) return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    if (request.nextUrl.pathname === ("/dashboard")) {
        if (!cookieToken) return NextResponse.redirect(new URL("/", request.url));
    }
}
export const config = {
  matcher: ["/", "/dashboard"],
};
