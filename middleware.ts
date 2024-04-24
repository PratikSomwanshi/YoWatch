import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./actions/userActions";

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;

    // const session = await getSession();
    // if (path === "/register") {
    //     return NextResponse.next();
    // }

    // if (path === "/search") {
    //     return NextResponse.next();
    // }

    // if (session.isLoggedIn && path !== "/login") {
    // }
    return NextResponse.redirect(new URL("/login", req.url));
    // return NextResponse.next();
}

export const config = {
    matcher: ["/video/:path*"],
};
