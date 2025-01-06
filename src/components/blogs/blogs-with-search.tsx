"use client";

import { useState } from "react";
import { BlogMetadata } from "@/lib/blogs";

import Blogs from "@/components/blogs/blogs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Cross2Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

export default function BlogsWithSearch({ blogs }: { blogs: BlogMetadata[] }) {
  const [query, setQuery] = useState("");
  const filtered = blogs.filter((blog) =>
    blog.title?.toLowerCase().includes(query.toLowerCase())
  );

  const isFiltered = query.length > 0;
  function resetFilter() {
    setQuery("");
  }

  return (
    <div>
      <div className="mb-12 flex items-center gap-3">
        <div className="relative w-full sm:w-1/2">
          <Input
            type="text"
            placeholder="Search blogs..."
            className="h-9 w-full pr-10"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <MagnifyingGlassIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-500" />
        </div>
        {isFiltered && (
          <Button
            size="sm"
            variant="secondary"
            onClick={resetFilter}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>

      <Blogs blogs={filtered} />
    </div>
  );
}
