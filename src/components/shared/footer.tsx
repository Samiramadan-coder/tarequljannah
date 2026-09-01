import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const footerLinks = [
  {
    title: "Our Programs",
    href: "/programs",
  },
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Contact",
    href: "/contact-us",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Jobs",
    href: "/jobs",
  },
  {
    title: "Privacy & Terms",
    href: "/privacy",
  },
  {
    title: "FAQs",
    href: "/faqs",
  },
];

const socialLinks = [
  {
    title: "Youtube",
    href: "#",
    icon: FaYoutube,
  },
  {
    title: "LinkedIn",
    href: "#",
    icon: FaLinkedin,
  },
  {
    title: "Facebook",
    href: "#",
    icon: FaFacebook,
  },
  {
    title: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#f4f6fc]">
      <div className="container">
        <div className="flex flex-col gap-6 border-b border-border py-12 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-xl font-semibold text-foreground md:text-2xl">
            Subscribe to receive our latest updates
          </h2>

          <form className="flex w-full max-w-87.5 gap-2.5">
            <Input
              type="email"
              placeholder="Your Email"
              className="h-11 bg-white"
            />
            <Button
              type="submit"
              className="h-11 shrink-0 bg-primary px-6 hover:bg-primary/90"
              aria-label="Subscribe"
            >
              Subscribe
            </Button>
          </form>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[170px_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="relative block h-32.5 w-42.5">
              <Image
                src="/logo.png"
                alt="Tareequl Jannah"
                fill
                className="object-contain"
              />
            </Link>
          </div>

          <div>
            <h3 className="mb-7 text-lg font-semibold">Get in touch</h3>

            <div className="space-y-5">
              <a
                href="tel:+16473740258"
                className="group flex items-center gap-4"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white">
                  <Phone className="size-5 text-[#1597f4]" />
                </span>

                <div className="text-sm">
                  <p className="text-muted-foreground">Call us directly?</p>
                  <p className="font-medium transition-colors group-hover:text-primary/90">
                    +1647-374-0258
                  </p>
                </div>
              </a>

              <a
                href="mailto:sales@mytj.ca"
                className="group flex items-center gap-4"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white">
                  <Mail className="size-5 text-[#1597f4]" />
                </span>

                <div className="text-sm">
                  <p className="text-muted-foreground">Email</p>
                  <p className="font-medium transition-colors group-hover:text-primary/90">
                    sales@mytj.ca
                  </p>
                </div>
              </a>
            </div>
          </div>

          <nav className="flex flex-col gap-5">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-fit text-[15px] transition-opacity hover:opacity-60"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div>
            <h3 className="mb-5 text-lg font-semibold">Our Social Platforms</h3>

            <div>
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-12.5 items-center gap-4 border-b border-border text-[15px] transition-opacity hover:opacity-60"
                  >
                    <Icon className="size-5" />
                    <span>{item.title}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pb-5 pt-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Tareequljannah All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
