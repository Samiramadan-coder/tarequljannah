import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "@/assets/globals.css";
import Header from "@/components/shared/header";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Quran classes online",
    template: "Quran classes online - %s",
  },
  description:
    "Master the Quran online with native Arabic tutors from Al-Azhar! Flexible classes, expert teachers & a free demo. start today!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${urbanist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
