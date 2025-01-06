import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";

const interBold = fetch(
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
        <div tw="flex relative flex-col p-12 w-full h-full items-start text-black bg-white">
          <div tw="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
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
            <p tw="ml-2 font-bold text-2xl">Najib Abdi</p>
          </div>
          <div tw="flex flex-col flex-1 py-10">
            <div tw="flex text-xl uppercase font-bold tracking-tight font-normal">
              Blog post
            </div>
            <div tw="flex text-[80px] font-bold text-[50px]">{heading}</div>
          </div>
          <div tw="flex items-center w-full justify-between">
            <div tw="flex text-xl">{siteConfig.url}</div>
            <div tw="flex items-center text-xl">
              <div tw="flex ml-2">{siteConfig.links.github}</div>
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
  } catch (error) {
    return new Response("Failed to generate image", { status: 500 });
  }
}
