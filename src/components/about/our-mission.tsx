import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import * as motion from "motion/react-client";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export function OurMission() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Mission
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
        >
          <Card className="ring-0!">
            <CardContent>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.98,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="relative min-h-70 overflow-hidden bg-muted sm:min-h-120"
              >
                <Image
                  src="https://www.tareequljannah.com/wp-content/uploads/2025/04/about-us-600x400.jpeg"
                  alt="Student reading Quran"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.06,
                    },
                  },
                }}
                className="flex flex-col justify-center p-6 sm:p-10 lg:p-12"
              >
                <motion.p
                  variants={fadeUp}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="text-sm leading-7 text-muted-foreground sm:text-base"
                >
                  At Tareeq Al Jannah, our mission is simple: to make Quran,
                  Arabic, and Islamic Studies easily accessible to students
                  around the globe using the latest online platforms, while
                  high-quality, authentic education remains at the heart of our
                  approach.
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base"
                >
                  We proudly work with Al-Azhar-certified teachers who provide
                  deep, meaningful insights into the Quran and Islamic
                  teachings. With a strong focus on excellence and personalized
                  instruction, we empower students of every level to not only
                  understand their faith but also live it with confidence.
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base"
                >
                  Our goal is to inspire a lifelong connection to faith,
                  culture, and knowledge by delivering a richer and more
                  immersive learning experience.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="mt-8"
                >
                  <h3 className="text-xl font-semibold text-foreground">
                    Meet Our Teachers
                  </h3>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.06,
                        },
                      },
                    }}
                  >
                    <motion.p
                      variants={fadeUp}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                      className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base"
                    >
                      At Tareeq Al Jannah, our teachers are more than just
                      instructors—they are passionate mentors and guides
                      dedicated to your learning journey. Each member of our
                      team is Al-Azhar certified, fluent in English, and
                      specially trained to teach online, ensuring a smooth and
                      effective way to learn Quran online.
                    </motion.p>

                    <motion.p
                      variants={fadeUp}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                      className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base"
                    >
                      From Quran Memorization and Tajweed to Islamic Studies,
                      our educators are experts in their fields. They don&apos;t
                      just teach from textbooks—they bring the rich legacy of
                      Al-Azhar University directly to you. Many of our teachers
                      continue to teach at Al-Azhar in Egypt, delivering
                      authentic, high-quality education straight from one of the
                      most renowned Islamic institutions in the world.
                    </motion.p>

                    <motion.p
                      variants={fadeUp}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                      className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base"
                    >
                      With expertise, dedication, and a deep love for teaching,
                      our instructors are here to help you connect with the
                      Quran, master Arabic, and strengthen your faith—one lesson
                      at a time.
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
