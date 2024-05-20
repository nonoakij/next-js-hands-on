import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const isAuth = request.cookies.get("___Host-auth");
	if (request.nextUrl.pathname.startsWith("/inbox") && !isAuth) {
		return NextResponse.redirect(new URL("/", request.url));
	}
	if (request.nextUrl.pathname === "/" && isAuth) {
		return NextResponse.redirect(new URL("/inbox", request.url));
	}
	return NextResponse.next();
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		"/((?!api|_next/static|_next/image|favicon.ico).*)",
	],
};
