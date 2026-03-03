import { NextRequest, NextResponse } from "next/server";

// Update this object with your actual personal links
const urlMap: Record<string, string> = {
  "linkedin-ieee-id": "https://www.linkedin.com/in/iadithyana/",
  linkedin: "https://www.linkedin.com/in/iadithyana/",
  github: "https://github.com/AdithyanA2005",
  x: "https://x.com/iadithyana",
  portfolio: "https://adithyana.vercel.app",
  resume: ""
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  // Await params since Next.js 15+ routing requires params to be asynchronous
  const { name } = await params;
  
  // Look up the URL in our defined object (case-insensitive)
  const targetUrl = urlMap[name.toLowerCase()];

  if (targetUrl) {
    // 307 Temporary Redirect (or use 308 for permanent if desired)
    return NextResponse.redirect(targetUrl);
  }

  // Fallback if the requested name isn't in our object
  return new NextResponse(`Route "/goto/${name}" not found.`, { status: 404 });
}
