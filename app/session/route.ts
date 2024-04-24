import { SessionData, sessionOptions } from "@/actions/ironSessionConfig";
import { getSession } from "@/actions/userActions";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const session = await getSession();

    const data = await request.json();

    console.log(data);

    session.isLoggedIn = true;
    session.email = data.email;
    session.userName = data.userName;
    session.token = data.token;
    await session.save();

    return Response.json({
        session,
    });
}

export async function GET(request: NextRequest) {
    const session = await getSession();
    return Response.json({
        message: "latest",
        session,
    });
}
