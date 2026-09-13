import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function OurMission() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Mission
          </h2>
        </div>

        <Card className="ring-0!">
          <CardContent className="">
            <div className="relative min-h-70 bg-muted sm:min-h-120">
              <Image
                src="https://www.tareequljannah.com/wp-content/uploads/2025/04/about-us-600x400.jpeg"
                alt="Student reading Quran"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
              <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                At Tareeq Al Jannah, our mission is simple: to make Quran,
                Arabic, and Islamic Studies easily accessible to students around
                the globe using the latest online platforms, while high-quality,
                authentic education remains at the heart of our approach.
              </p>

              <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                We proudly work with Al-Azhar-certified teachers who provide
                deep, meaningful insights into the Quran and Islamic teachings.
                With a strong focus on excellence and personalized instruction,
                we empower students of every level to not only understand their
                faith but also live it with confidence.
              </p>

              <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                Our goal is to inspire a lifelong connection to faith, culture,
                and knowledge by delivering a richer and more immersive learning
                experience.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground">
                  Meet Our Teachers
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  At Tareeq Al Jannah, our teachers are more than just
                  instructors—they are passionate mentors and guides dedicated
                  to your learning journey. Each member of our team is Al-Azhar
                  certified, fluent in English, and specially trained to teach
                  online, ensuring a smooth and effective way to learn Quran
                  online.
                </p>

                <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                  From Quran Memorization and Tajweed to Islamic Studies, our
                  educators are experts in their fields. They don&apos;t just
                  teach from textbooks—they bring the rich legacy of Al-Azhar
                  University directly to you. Many of our teachers continue to
                  teach at Al-Azhar in Egypt, delivering authentic, high-quality
                  education straight from one of the most renowned Islamic
                  institutions in the world.
                </p>

                <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                  With expertise, dedication, and a deep love for teaching, our
                  instructors are here to help you connect with the Quran,
                  master Arabic, and strengthen your faith—one lesson at a time.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
