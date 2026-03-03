import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  // Await params since Next.js 15+ routing requires params to be asynchronous
  const { name } = await params;
  
  if (!process.env.DATABASE_URL) {
     return new NextResponse("DATABASE_URL is not defined.", { status: 500 });
  }

  // Initialize Neon client
  const sql = neon(process.env.DATABASE_URL);

  try {
    // Look up the URL in our defined database table (case-insensitive)
    const result = await sql`
      SELECT target_url 
      FROM redirects 
      WHERE LOWER(name) = LOWER(${name})
    `;

    if (result.length > 0 && result[0].target_url) {
      // 307 Temporary Redirect (or use 308 for permanent if desired)
      return NextResponse.redirect(result[0].target_url);
    }

    // Fallback if the requested name isn't in our database
    return new NextResponse(`Route "/goto/${name}" not found.`, { status: 404 });
  } catch (error) {
    console.error("Database query failed:", error);
    return new NextResponse("Error fetching redirect URL.", { status: 500 });
  }
}
