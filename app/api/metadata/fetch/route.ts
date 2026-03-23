import { db } from "@/db/client";
import { metadata } from "@/db/schema";
import { isAuthorized } from "@/lib/isAuthorized";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const user = await isAuthorized();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const cookieStore = await cookies();
    const metaDataCookie = cookieStore.get("metadata");

    // ✅ Return from cookie if available
    if (metaDataCookie?.value) {
      return NextResponse.json(
        {
          exists: true,
          data: JSON.parse(metaDataCookie.value),
          source: "cookie",
        },
        { status: 200 }
      );
    }

    // ✅ Fetch from DB
    const [record] = await db
      .select()
      .from(metadata)
      .where(eq(metadata.user_email, user.value.email));

    if (record) {
      cookieStore.set(
        "metadata",
        JSON.stringify({
          business_name: record.business_name,
        }),
        {
          httpOnly: true,
          maxAge: 60 * 60 * 24 * 30, // 30 days
          path: "/",
          secure: process.env.NODE_ENV === "production",
        }
      );

      return NextResponse.json(
        {
          exists: true,
          source: "database",
          data: record,
        },
        { status: 200 }
      );
    }

    // ✅ If no metadata found
    return NextResponse.json(
      {
        exists: false,
        data: null,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching metadata:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}