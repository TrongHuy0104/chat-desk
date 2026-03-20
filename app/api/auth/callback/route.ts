import { db } from "@/db/client";
import scalekit from "@/lib/scalekit";
import { NextRequest, NextResponse } from "next/server";
import { user as User } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(req: NextRequest) {
    const {searchParams} = req.nextUrl;
    const code = searchParams.get("code");
    const error = searchParams.get("error")
    const error_description = searchParams.get("error_description")

    if(error) {
        console.error("Error in GET /api/auth/callback:", error, error_description);
        return NextResponse.json({ error: error_description }, { status: 401 });
    }

    if(!code) {
        console.error("Error in GET /api/auth/callback:", "Authorization code not found");
        return NextResponse.json({ error: "Authorization code not found" }, { status: 400 });
    }

    try {
        const redirectURI = process.env.SCALEKIT_REDIRECT_URI!;

        const authResult = await scalekit.authenticateWithCode(code, redirectURI);
        
        const {user, idToken} = authResult;

        const claims = await scalekit.validateToken(idToken);

        const organizationId = (claims as any).organization_id || (claims as any).org_id || (claims as any).oid || null;

        if(!organizationId) {
            console.error("Error in GET /api/auth/callback:", "Organization ID not found");
            return NextResponse.json({ error: "Organization ID not found" }, { status: 500 });
        }

        const existing = await db.select().from(User).where(eq(User.email, user.email));

        if(existing.length === 0) {
            await db.insert(User).values({
                name: user?.name || "anonymous",
                email: user.email,
                image: (user as any)?.image || (user as any)?.picture || "",
                organization_id: organizationId,
            });
        }

        const response = NextResponse.redirect(new URL("/", req.url));
        const userSession = {
            email: user.email,
            organization_id: organizationId,
        }

        response.cookies.set("user_session", JSON.stringify(userSession), {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
        });

        return response;
        
    } catch (error) {
        console.error("Error in GET /api/auth/callback:", error);
        return NextResponse.json({ error: "Failed to authenticate" }, { status: 500 });
    }
}