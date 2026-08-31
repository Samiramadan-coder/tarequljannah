"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

type ProgramChild = {
  title: string;
  href: string;
};

type Program = {
  id: string;
  title: string;
  href?: string;
  children?: ProgramChild[];
};

const programs: Program[] = [
  {
    id: "islamic-course",
    title: "Islamic Course",
    children: [
      {
        title: "Islamic Studies Introduction Course",
        href: "/programs/islamic/introduction",
      },
      {
        title: "Islamic Studies Pre-Intermediate Course",
        href: "/programs/islamic/pre-intermediate",
      },
      {
        title: "Islamic Studies Intermediate Course",
        href: "/programs/islamic/intermediate",
      },
      {
        title: "Advanced Islamic Studies Course",
        href: "/programs/islamic/advanced",
      },
    ],
  },
  {
    id: "arabic-language",
    title: "Arabic Language",
    children: [
      {
        title: "Arabic Beginner",
        href: "/programs/arabic/beginner",
      },
      {
        title: "Arabic Intermediate",
        href: "/programs/arabic/intermediate",
      },
      {
        title: "Arabic Advanced",
        href: "/programs/arabic/advanced",
      },
    ],
  },
  {
    id: "holy-quran",
    title: "Holy Quran",
    children: [
      {
        title: "Quran Reading",
        href: "/programs/quran/reading",
      },
      {
        title: "Quran Memorization",
        href: "/programs/quran/memorization",
      },
    ],
  },
  {
    id: "ijazah",
    title: "Ijazah",
    children: [
      {
        title: "Quran Ijazah",
        href: "/programs/ijazah/quran",
      },
      {
        title: "Hadith Ijazah",
        href: "/programs/ijazah/hadith",
      },
    ],
  },
  {
    id: "tajweed",
    title: "Tajweed",
    children: [
      {
        title: "Basic Tajweed",
        href: "/programs/tajweed/basic",
      },
      {
        title: "Advanced Tajweed",
        href: "/programs/tajweed/advanced",
      },
    ],
  },
  {
    id: "revert-program",
    title: "Revert Program",
    href: "/programs/revert",
  },
];

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
  const [programsOpen, setProgramsOpen] = useState(false);
  const [activeProgramId, setActiveProgramId] = useState(programs[0].id);
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeProgram = programs.find(
    (program) => program.id === activeProgramId,
  );

  return (
    <header className="relative z-50 border-b border-[#e7e7e7] bg-white">
      <div className="container flex h-31.5 items-center justify-between">
        <Link href="/" className="relative block h-23.75 w-32.5 shrink-0">
          <Image
            src="/logo.png"
            alt="Tareequl Jannah"
            fill
            priority
            className="object-contain"
          />
        </Link>

        <nav className="hidden items-center lg:flex">
          <div className="flex items-center gap-7">
            <Link
              href="/about-us"
              className="text-[15px] font-semibold text-black transition-opacity hover:opacity-60"
            >
              About
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setProgramsOpen(true)}
              onMouseLeave={() => setProgramsOpen(false)}
            >
              <button
                type="button"
                className="flex h-12 items-center gap-1 text-[15px] font-semibold text-black"
              >
                Programs
                <ChevronDown
                  className={cn(
                    "size-4 transition-transform duration-200",
                    programsOpen && "rotate-180",
                  )}
                />
              </button>

              <div
                className={cn(
                  "absolute left-0 top-full h-4 w-full",
                  programsOpen ? "block" : "hidden",
                )}
              />

              <div
                className={cn(
                  "absolute left-1/2 top-[calc(100%+12px)] translate-x-[-38%] transition-all duration-150",
                  programsOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-1 opacity-0",
                )}
              >
                <div className="relative flex min-h-75 w-140 items-stretch rounded-xl bg-white p-3 shadow-[0_10px_40px_rgba(0,0,0,0.12)]">
                  <div className="w-62.5 shrink-0 rounded-lg bg-white p-1">
                    {programs.map((program) => {
                      const isActive = activeProgramId === program.id;

                      const hasChildren = Boolean(program.children?.length);

                      if (!hasChildren && program.href) {
                        return (
                          <Link
                            key={program.id}
                            href={program.href}
                            onMouseEnter={() => setActiveProgramId(program.id)}
                            className={cn(
                              "flex min-h-11 items-center rounded-lg px-4 text-[15px] text-[#222] transition-colors hover:bg-[#f3f4f7]",
                              isActive && "bg-[#f1f2f5]",
                            )}
                          >
                            {program.title}
                          </Link>
                        );
                      }

                      return (
                        <button
                          key={program.id}
                          type="button"
                          onMouseEnter={() => setActiveProgramId(program.id)}
                          className={cn(
                            "flex min-h-11 w-full items-center justify-between rounded-lg px-4 text-left text-[15px] text-[#222] transition-colors hover:bg-[#f3f4f7]",
                            isActive && "bg-[#f1f2f5]",
                          )}
                        >
                          <span>{program.title}</span>

                          <ChevronRight className="size-4" />
                        </button>
                      );
                    })}
                  </div>

                  <div className="ml-2 flex-1">
                    {activeProgram?.children &&
                    activeProgram.children.length > 0 ? (
                      <div className="h-full min-h-69 rounded-xl bg-white px-4 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.12)]">
                        {activeProgram.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-lg px-3 py-3 text-[15px] leading-6 text-[#222] transition-colors hover:bg-[#f3f4f7]"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-[15px] font-semibold text-black transition-opacity hover:opacity-60"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <Link
            href="/enroll"
            className="flex h-10 min-w-29 items-center justify-center rounded-lg bg-[#207183] px-5 text-[14px] font-medium text-white transition-colors hover:bg-[#175d6c]"
          >
            Enroll Now
          </Link>

          <Link
            href="/book-demo"
            className="flex h-10 min-w-39.5 items-center justify-center rounded-lg bg-[#207183] px-5 text-[14px] font-medium text-white transition-colors hover:bg-[#175d6c]"
          >
            Book Demo Now
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex size-10 items-center justify-center rounded-lg border lg:hidden"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t bg-white px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-1">
            <Link
              href="/about"
              className="rounded-lg px-3 py-3 text-sm hover:bg-muted"
            >
              About
            </Link>

            <Link
              href="/programs"
              className="rounded-lg px-3 py-3 text-sm hover:bg-muted"
            >
              Programs
            </Link>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm hover:bg-muted"
              >
                {item.title}
              </Link>
            ))}

            <div className="mt-4 grid grid-cols-2 gap-3">
              <Link
                href="/enroll"
                className="flex h-11 items-center justify-center rounded-lg bg-[#207183] text-sm text-white"
              >
                Enroll Now
              </Link>

              <Link
                href="/book-demo"
                className="flex h-11 items-center justify-center rounded-lg bg-[#207183] text-sm text-white"
              >
                Book Demo Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
