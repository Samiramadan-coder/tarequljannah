"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type NavLinkProps = ComponentProps<typeof Link> & {
  activeClassName?: string;
};

export default function NavLink({
  href,
  className,
  activeClassName = "text-primary",
  ...props
}: NavLinkProps) {
  const pathname = usePathname();
  const path = href.toString();
  const isActive =
    path === "/"
      ? pathname === path
      : pathname === path || pathname.startsWith(`${path}/`);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(className, isActive && activeClassName)}
      {...props}
    />
  );
}
