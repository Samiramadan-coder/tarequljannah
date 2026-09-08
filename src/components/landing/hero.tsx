import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full bg-white py-12">
      <div className="container grid items-center gap-10 lg:grid-cols-2">
        {/* النص */}
        <div className="max-w-xl">
          <p className="mb-3 text-lg font-medium text-muted-foreground">
            Welcome to
          </p>
          <h1 className="text-[60px] font-bold tracking-tight text-primary sm:text-5xl">
            MYTJ
          </h1>
          <p className="mt-2 font-semibold text-primary">
            Online Quran Classes for Kids & Adults
          </p>
          <p className="mt-2 font-semibold leading-6 text-primary">
            Learn Quran with qualified Al-Azhar teachers from the comfort of
            your home.
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-5 text-muted-foreground">
            <li>✓ Learn Tajweed</li>
            <li>✓ Memorize Quran</li>
            <li>✓ Flexible Timings Available</li>
            <li>✓ Flexible Trial Classes</li>
            <li>✓ Quran Reading, Translation & Islamic Studies</li>
            <li>✓ Highly Qualified Quran Teachers</li>
            <li>
              ✓ Personalized one-to-one classes designed to help you achieve
              your goals
            </li>
          </ul>

          <p className="mt-5 text-sm font-semibold text-primary">
            Start with a FREE trial lesson today.
          </p>

          <a href="#request-free-demo">
            <Button
              className="mt-5 rounded-full px-5 text-sm h-12"
              aria-label="Book A Free Demo"
            >
              Book A Free Demo
            </Button>
          </a>
        </div>

        {/* الصورة والعرض */}
        <div className="relative h-100">
          <Image
            src="/landing-hero.png"
            alt="Landing Hero"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
}
