import { Badge } from "@/components/ui/badge";
import YouTubeLite from "../reusable/youtube-lite";
import { Clock3, CheckCircle2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import * as motion from "motion/react-client";

const features = [
  "We strive to make Quran, Arabic, and Islamic Studies accessible to students worldwide.",
  "Our state-of-the-art online learning hub is fully equipped to support learners.",
  "We provide authentic knowledge taught by qualified and certified teachers.",
  "Our goal is to help students deeply understand the Quran and Islamic teachings.",
  "We personalize instruction with empowering lessons for every level.",
  "We are committed to excellence, faith, and spiritual connection.",
];

const fadeUp = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export function Journey() {
  return (
    <section className="min-h-screen py-10 sm:py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Card className="rounded-none bg-background py-0 ring-0!">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="relative aspect-video w-full overflow-hidden rounded-xl bg-white"
            >
              <YouTubeLite
                videoId="tKl2CtYGPzw"
                title="The Leading Online Quran Platform"
              />
            </motion.div>

            <CardContent className="p-5 sm:p-8 lg:p-10">
              <motion.div
                variants={fadeUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="max-w-4xl"
              >
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">Arabic Learning</Badge>

                  <Badge variant="outline">Quran Studies</Badge>

                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock3 className="size-3.5" />5 min read
                  </span>
                </div>

                <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                  Tareeq Al Jannah – Your Ultimate Destination for Learning
                  Quran, Arabic & Islamic Studies.
                </h1>

                <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  At Tareeq Al Jannah, we believe that learning the Quran,
                  Arabic, and Islamic Studies should be accessible to everyone.
                  We provide a supportive learning environment designed to help
                  students grow in knowledge, confidence, and faith.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="origin-left"
              >
                <Separator className="my-8" />
              </motion.div>

              <article className="space-y-10">
                <motion.section
                  variants={fadeUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                >
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
                </motion.section>

                <motion.section
                  variants={fadeUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                >
                  <h2 className="text-xl font-semibold sm:text-2xl">
                    Tareeq Al Jannah – Where Learning Meets Spirituality.
                  </h2>

                  <motion.ul
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                        },
                      },
                    }}
                    className="mt-5 space-y-3"
                  >
                    {features.map((feature) => (
                      <motion.li
                        key={feature}
                        variants={{
                          hidden: {
                            opacity: 0,
                            x: -15,
                          },
                          visible: {
                            opacity: 1,
                            x: 0,
                          },
                        }}
                        transition={{
                          duration: 0.25,
                          ease: "easeOut",
                        }}
                        className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />

                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.section>

                <motion.section
                  variants={fadeUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                  className="space-y-4"
                >
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
                </motion.section>

                <motion.section
                  variants={fadeUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                  className="space-y-4"
                >
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
                </motion.section>
              </article>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
