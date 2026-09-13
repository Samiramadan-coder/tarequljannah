import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Clock3, BookOpen, CheckCircle2 } from "lucide-react";

const features = [
  "We strive to make Quran, Arabic, and Islamic Studies accessible to students worldwide.",
  "Our state-of-the-art online learning hub is fully equipped to support learners.",
  "We provide authentic knowledge taught by qualified and certified teachers.",
  "Our goal is to help students deeply understand the Quran and Islamic teachings.",
  "We personalize instruction with empowering lessons for every level.",
  "We are committed to excellence, faith, and spiritual connection.",
];

export function Journey() {
  return (
    <section className="min-h-screen py-10 sm:py-16">
      <div className="container">
        <Card className="ring-0! bg-background py-0 rounded-none">
          {/* <div className="relative aspect-video w-full">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/tKl2CtYGPzw?si=MUfQfDC9EKSluoXw&enablejsapi=1"
              title="Ready to start your Arabic journey"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

            <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-md px-3 py-2 text-xs text-white backdrop-blur-sm">
              <BookOpen className="size-4" />
              <span>Ready to start your Arabic journey?</span>
            </div>
          </div> */}
          <div className="relative aspect-video w-full overflow-hidden bg-white">
            <iframe
              className="absolute left-1/2 top-1/2 block h-[102%] w-[102%] -translate-x-1/2 -translate-y-1/2 border-0"
              src="https://www.youtube.com/embed/tKl2CtYGPzw"
              title="Ready to start your Arabic journey"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />

            <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-md px-3 py-2 text-xs text-white backdrop-blur-sm">
              <BookOpen className="size-4" />
              <span>Ready to start your Arabic journey?</span>
            </div>
          </div>

          <CardContent className="p-5 sm:p-8 lg:p-10">
            <div className="max-w-4xl">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <Badge variant="secondary">Arabic Learning</Badge>
                <Badge variant="outline">Quran Studies</Badge>

                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock3 className="size-3.5" />5 min read
                </span>
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                Tareeq Al Jannah – Your Ultimate Destination for Learning Quran,
                Arabic & Islamic Studies.
              </h1>

              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                At Tareeq Al Jannah, we believe that learning the Quran, Arabic,
                and Islamic Studies should be accessible to everyone. We provide
                a supportive learning environment designed to help students grow
                in knowledge, confidence, and faith.
              </p>
            </div>

            <Separator className="my-8" />

            <div>
              <article className="space-y-10">
                <section>
                  <h2 className="text-xl font-semibold sm:text-2xl">
                    What makes us different?
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                    At Tareeq Al Jannah, we don&apos;t just teach; we inspire,
                    guide, and empower students as they learn to master the
                    Quran, Arabic, and Islamic Studies. We connect students
                    worldwide with highly qualified teachers who are dedicated
                    to making Islamic education fun, accessible, and
                    life-changing.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold sm:text-2xl">
                    Tareeq Al Jannah – Where Learning Meets Spirituality.
                  </h2>

                  <ul className="mt-5 space-y-3">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold sm:text-2xl">
                    Our Approach at Tareeq Al Jannah:
                  </h2>

                  <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    At Tareeq Al Jannah, we are committed to making Quran,
                    Arabic, and Islamic Studies easy to learn and accessible to
                    learners of all levels. With the help of fun and engaging
                    activities and games, we make learning online and Arabic
                    less overwhelming and more enjoyable.
                  </p>

                  <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    Our courses are carefully designed to meet the needs of
                    children and adults, whether they are beginners or advanced
                    students.
                  </p>

                  <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    We take pride in using cutting-edge technology to create an
                    interactive and effective online learning experience.
                  </p>

                  <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    Our instructors are highly qualified and passionate
                    teachers. They are experts in Quran memorization, Tajweed,
                    and Islamic Studies, ensuring that students receive
                    authentic, high-quality instruction from the comfort of
                    their homes.
                  </p>

                  <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    With a structured curriculum and personalized guidance, we
                    make your journey of learning meaningful, engaging, and
                    spiritually enriching.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-semibold sm:text-2xl">
                    Our Vision
                  </h2>

                  <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    At Tareeq Al Jannah, we envision a world where it is easy to
                    learn Quran online, Arabic, and Islamic Studies, and where
                    they are accessible to everyone, no matter where they are.
                    Our goal is to become the leading global online institute
                    known for our authenticity, expertise, and commitment to
                    student success.
                  </p>

                  <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                    We strive to create a future where seeking Islamic knowledge
                    is easy, engaging, and transformative. Through continuous
                    innovation and a passion for education, we aim to empower
                    learners to deepen their connection to their faith,
                    equipping them with the knowledge and confidence to lead
                    with wisdom and purpose.
                  </p>
                </section>
              </article>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
