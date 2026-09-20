import Link from "next/link";
import Image from "next/image";
import NavLink from "@/components/shared/nav-link";
import MobileNav from "@/components/shared/mobile-nav";

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
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <MobileNav navItems={navItems}>
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
            <NavLink
              href="/about-us"
              className="text-[15px] font-semibold transition-opacity hover:opacity-60"
            >
              About
            </NavLink>

            <NavLink
              href="/courses"
              className="text-[15px] font-semibold transition-opacity hover:opacity-60"
            >
              Programs
            </NavLink>

            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-[15px] font-semibold transition-opacity hover:opacity-60"
              >
                {item.title}
              </NavLink>
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
      </MobileNav>
    </header>
  );
}
