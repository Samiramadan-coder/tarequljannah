import Image from "next/image";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function QuranHero() {
  return (
    <section className="flex min-h-[calc(100svh-127px)] w-full items-center overflow-hidden bg-white py-10 md:py-12">
      <div className="container mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <p className="mb-5 text-lg font-medium">Welcome to</p>

          <h1 className="text-5xl font-semibold tracking-tight text-[#237487] md:text-6xl">
            MYTJ
          </h1>

          <p className="mt-3 text-base font-semibold text-primary">
            Online Quran Classes for Kids & Adults
          </p>

          <p className="mt-5 text-base font-semibold leading-7 text-primary">
            Learn Quran with qualified Al-Azhar teachers from the comfort of
            your home.
          </p>

          <ul className="mt-5 space-y-2 text-sm md:text-base">
            <HeroFeature>FREE Trial Class</HeroFeature>

            <HeroFeature>Native Arabic Tutors</HeroFeature>

            <HeroFeature>Male & Female Teachers Available</HeroFeature>

            <HeroFeature>Flexible Timings Worldwide</HeroFeature>

            <HeroFeature>
              Quran Reading, Tajweed, Hifz & Islamic Studies
            </HeroFeature>
          </ul>

          <p className="mt-4 max-w-lg text-sm leading-6 md:text-base">
            Whether you&apos;re a beginner or looking to improve your recitation
            and memorization, our personalized one-to-one classes are designed
            to help you achieve your goals faster.
          </p>

          <p className="mt-4 text-base font-semibold text-primary">
            Start with a FREE trial lesson today.
          </p>

          <Button
            size="lg"
            className="mt-5 h-12 rounded-full bg-primary px-7 font-semibold text-white hover:bg-primary/90"
          >
            Book A Free Demo
          </Button>
        </div>

        <div className="relative mx-auto w-full max-w-130 lg:mx-0">
          <div className="relative rotate-6 overflow-hidden rounded-[18px]">
            <Image
              src="/landing-hero.png"
              alt="Quran learning"
              width={650}
              height={520}
              priority
              fetchPriority="high"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-[1.2/1] w-full object-cover"
            />
          </div>

          <div className="absolute -left-4 bottom-[14%] flex items-center gap-4 rounded-xl bg-[#CF901E] px-5 py-4 shadow-md sm:left-[-9%] sm:px-6">
            <div className="rounded-full bg-[#237487] px-4 py-1 text-xl font-bold text-white">
              USD 8
            </div>

            <div className="text-white">
              <p className="text-sm font-bold md:text-base">Special Offer</p>

              <p className="mt-1 text-xs md:text-sm">
                Per hour - Limited Time!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroFeature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <Check className="mt-0.5 size-4 shrink-0 stroke-[2.2]" />
      <span>{children}</span>
    </li>
  );
}
