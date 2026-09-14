import { Mail, Phone } from "lucide-react";
import * as motion from "motion/react-client";

import { Separator } from "@/components/ui/separator";

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function ContactIntroSection() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container">
        <div className="max-w-6xl space-y-8">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="space-y-2"
          >
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Your Gateway to Quranic Excellence and Islamic Scholarship
            </h1>

            <div className="space-y-1 text-sm leading-6 text-muted-foreground md:text-base">
              <p className="font-semibold text-foreground">
                Assalamu Alaikum wa Rahmatullahi wa Barakatuh
              </p>

              <p>
                Welcome to Tareeq ul Jannah Institute, your trusted online
                platform for authentic Quranic education, Arabic language
                mastery, and Islamic studies. We&apos;re here to support your
                journey of faith and knowledge.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="space-y-3"
          >
            <h2 className="text-2xl font-semibold tracking-tight">
              Reach Out to Us
            </h2>

            <p className="text-sm leading-6 text-muted-foreground md:text-base">
              Whether you&apos;re a student, parent, educator, or partner, our
              team is committed to assisting you.
            </p>

            <div className="flex">
              <motion.div
                initial={{
                  scaleY: 0,
                  opacity: 0,
                }}
                whileInView={{
                  scaleY: 1,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  ease: "easeOut",
                }}
                className="mr-5 origin-top"
              >
                <Separator
                  orientation="vertical"
                  className="h-auto min-h-17 w-1"
                />
              </motion.div>

              <div className="space-y-2 py-2">
                <motion.a
                  href="tel:+16479457321"
                  initial={{
                    opacity: 0,
                    x: -12,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.25,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    x: 4,
                  }}
                  className="flex items-center gap-2 text-sm md:text-base"
                >
                  <Phone className="size-4 text-muted-foreground" />

                  <span className="text-muted-foreground">Phone</span>

                  <span className="font-semibold text-foreground">
                    +1 647 9457 321
                  </span>
                </motion.a>

                <motion.a
                  href="mailto:support@mytj.ca"
                  initial={{
                    opacity: 0,
                    x: -12,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.35,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    x: 4,
                  }}
                  className="flex items-center gap-2 text-sm md:text-base"
                >
                  <Mail className="size-4 text-muted-foreground" />

                  <span className="text-muted-foreground">Email</span>

                  <span className="font-semibold text-foreground">
                    support@mytj.ca
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="space-y-2"
          >
            <h2 className="text-2xl font-semibold tracking-tight">
              Virtual Office Hours
            </h2>

            <p className="text-sm leading-6 text-muted-foreground md:text-base">
              Our global support team is available 24/7 for online learners.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
