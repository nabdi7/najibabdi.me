import Link from "next/link";
import { ThemeToggle } from "../theme/theme-toggle";
import MobileMenu from "../menu/menu";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <nav className="container flex max-w-3xl items-center justify-between">
        <div>
          <Link href="/" className="font-serif text-md font-bold">
            Najib Abdi.
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10">
          <li className="transition-colors hover:text-foreground">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="transition-colors hover:text-foreground">
            <Link href="/research">Research</Link>
          </li>
          <li className="transition-colors hover:text-foreground">
            <Link href="/blogs">Blogs</Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
