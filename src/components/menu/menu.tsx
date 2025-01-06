"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden">
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="p-2 text-foreground"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-x-0 top-[73px] z-50 bg-background border-b"
        >
          <div className="container max-w-3xl py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/projects"
                className="font-light text-muted-foreground hover:text-foreground transition-colors py-1"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/research"
                className="font-light text-muted-foreground hover:text-foreground transition-colors py-1"
                onClick={() => setIsOpen(false)}
              >
                Research
              </Link>
              <Link
                href="/blogs"
                className="font-light text-muted-foreground hover:text-foreground transition-colors py-1"
                onClick={() => setIsOpen(false)}
              >
                Blogs
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
