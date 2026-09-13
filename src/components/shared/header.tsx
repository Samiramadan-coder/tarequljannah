"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Testimonials",
    href: "/testimonials",
  },
  {
    title: "Blogs",
    href: "/blogs",
  },
  {
    title: "Listen to Quran",
    href: "/listen-to-quran",
  },
  {
    title: "Contact",
    href: "/contact-us",
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="container flex h-31.5 items-center justify-between">
        <Link href="/" className="relative block h-23.75 w-32.5 shrink-0">
          <Image
            src="/logo.webp"
            alt="Tareequl Jannah"
            fill
            priority
            fetchPriority="high"
            sizes="130px"
            className="object-contain"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center xl:flex">
          <div className="flex items-center gap-7">
            <Link
              href="/about-us"
              className="text-[15px] font-semibold transition-opacity hover:opacity-60"
            >
              About
            </Link>

            <Link
              href="/programs"
              className="text-[15px] font-semibold transition-opacity hover:opacity-60"
            >
              Programs
            </Link>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-[15px] font-semibold transition-opacity hover:opacity-60"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2.5 xl:flex">
          <Link
            href="#"
            className="flex h-10 min-w-29 items-center justify-center rounded-lg bg-primary px-5 text-[14px] font-medium text-white transition-colors hover:bg-[#175d6c]"
          >
            Enroll Now
          </Link>

          <Link
            href="#"
            className="flex h-10 min-w-39.5 items-center justify-center rounded-lg bg-primary px-5 text-[14px] font-medium text-white transition-colors hover:bg-[#175d6c]"
          >
            Book Demo Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex size-11 items-center justify-center rounded-lg border xl:hidden"
        >
          {mobileOpen ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div className="border-t bg-white px-6 py-5 xl:hidden">
          <nav className="flex flex-col gap-1">
            <Link
              href="/about-us"
              onClick={closeMobileMenu}
              className="rounded-lg px-3 py-3 text-sm hover:bg-muted"
            >
              About
            </Link>

            <Link
              href="/programs"
              onClick={closeMobileMenu}
              className="rounded-lg px-3 py-3 text-sm hover:bg-muted"
            >
              Programs
            </Link>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="rounded-lg px-3 py-3 text-sm hover:bg-muted"
              >
                {item.title}
              </Link>
            ))}

            <div className="mt-4 grid grid-cols-2 gap-3">
              <Link
                href="#"
                onClick={closeMobileMenu}
                className="flex h-11 items-center justify-center rounded-lg bg-primary text-sm text-white"
              >
                Enroll Now
              </Link>

              <Link
                href="#"
                onClick={closeMobileMenu}
                className="flex h-11 items-center justify-center rounded-lg bg-primary text-sm text-white"
              >
                Book Demo Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
