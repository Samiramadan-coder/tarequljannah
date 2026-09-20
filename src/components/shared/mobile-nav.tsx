"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import NavLink from "@/components/shared/nav-link";

type NavItem = {
  title: string;
  href: string;
};

export default function MobileNav({
  navItems,
  children,
}: {
  navItems: NavItem[];
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const closeMobileMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="container flex h-31.5 items-center justify-between">
        {children}

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="flex size-11 items-center justify-center rounded-lg border xl:hidden"
        >
          {open ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {open && (
        <div className="border-t bg-white px-6 py-5 xl:hidden">
          <nav className="flex flex-col gap-1">
            <NavLink
              href="/about-us"
              onClick={closeMobileMenu}
              className="rounded-lg px-3 py-3 text-sm hover:bg-muted"
              activeClassName="bg-muted text-primary"
            >
              About
            </NavLink>

            <NavLink
              href="/programs"
              onClick={closeMobileMenu}
              className="rounded-lg px-3 py-3 text-sm hover:bg-muted"
              activeClassName="bg-muted text-primary"
            >
              Programs
            </NavLink>

            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="rounded-lg px-3 py-3 text-sm hover:bg-muted"
                activeClassName="bg-muted text-primary"
              >
                {item.title}
              </NavLink>
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
    </>
  );
}
