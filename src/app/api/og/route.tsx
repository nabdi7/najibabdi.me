import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";

const interBold: Promise<ArrayBuffer> = fetch(
  new URL("../../../../public/fonts/Inter-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  try {
    const fontBold = await interBold;

    const { searchParams } = req.nextUrl;
    const title = searchParams.get("title");

    if (!title) {
      return new Response("No title provided", { status: 500 });
    }

    const heading =
      title.length > 140 ? `${title.substring(0, 140)}...` : title;

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "48px",
            width: "100%",
            height: "100%",
            alignItems: "flex-start",
            color: "black",
            backgroundColor: "white",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0" />
              <path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" />
              <path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8" />
              <path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" />
              <path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0" />
              <path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" />
              <path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8" />
              <path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" />
              <circle cx="12" cy="12" r="1" />
            </svg>
            <p style={{ marginLeft: "8px", fontWeight: 700, fontSize: "24px" }}>
              Najib Abdi
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              padding: "40px 0",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "20px",
                textTransform: "uppercase",
                fontWeight: 700,
                letterSpacing: "tight",
              }}
            >
              Blog post
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "50px",
                fontWeight: 700,
              }}
            >
              {heading}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", fontSize: "20px" }}>
              {siteConfig.url}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "20px",
              }}
            >
              <div style={{ display: "flex", marginLeft: "8px" }}>
                {siteConfig.links.github}
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontBold,
            style: "normal",
            weight: 700,
          },
        ],
      }
    );
  } catch (e: unknown) {
    console.error("Error generating OG image:", e);
    return new Response("Failed to generate image", { status: 500 });
  }
}
