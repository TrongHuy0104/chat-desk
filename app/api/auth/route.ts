import scalekit from "@/lib/scalekit";
import crypto from "crypto";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const state = crypto.randomBytes(16).toString("hex");
        (await cookies()).set("sk_state", state, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 7, // 7 days
        });

        const redirectURI = process.env.SCALEKIT_REDIRECT_URI!;

        const options = {
            scopes: ['openid', 'profile', 'email', 'offline_access'],
            state
        }

        const authorizationURL = scalekit.getAuthorizationUrl(redirectURI, options);

        return NextResponse.redirect(authorizationURL);
    } catch (error) {
        console.error("Error in GET /api/auth:", error);
        return NextResponse.json({ error: "Failed to generate authorization URL" }, { status: 500 });
    }
}