import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name") || "User";
  const initials = name.substring(0, 2).toUpperCase();

  const colors = [
    "#ef4444", "#f97316", "#f59e0b", "#84cc16", "#10b981",
    "#06b6d4", "#3b82f6", "#6366f1", "#8b5cf6", "#d946ef", "#f43f5e"
  ];

  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color = colors[Math.abs(hash) % colors.length];

  const svg = `
    <svg width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" fill="${color}" />
      <text x="64" y="64" dy=".1em" fill="#ffffff" font-family="Arial, sans-serif" font-size="50" font-weight="bold" text-anchor="middle" dominant-baseline="middle">
        ${initials}
      </text>
    </svg>
  `.trim();

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}