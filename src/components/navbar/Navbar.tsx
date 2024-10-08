"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-center items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="font-bold">{siteConfig.name}.</span>
      </Link>
      <Link
        href="/projects"
        className={`font-medium hidden sm:inline-block ${pathname === "/projects" ? "text-blue-500" : "text-gray-700"}`}
      >
        Projects
      </Link>
      <Link
        href="/research"
        className={`font-medium hidden sm:inline-block ${pathname === "/research" ? "text-blue-500" : "text-gray-700"}`}
      >
        Research
      </Link>
      <Link
        href="/blogs"
        className={`font-medium hidden sm:inline-block ${pathname === "/blogs" ? "text-blue-500" : "text-gray-700"}`}
      >
        Blogs
      </Link>
   
    </nav>
  );
}