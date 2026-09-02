import { Mail, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function ContactIntroSection() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container">
        <div className="max-w-6xl space-y-8">
          <div className="space-y-2">
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
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">
              Reach Out to Us
            </h2>

            <p className="text-sm leading-6 text-muted-foreground md:text-base">
              Whether you&apos;re a student, parent, educator, or partner, our
              team is committed to assisting you.
            </p>

            <div className="flex">
              <Separator
                orientation="vertical"
                className="mr-5 h-auto min-h-17 w-1"
              />

              <div className="space-y-2 py-2">
                <a
                  href="tel:+16479457321"
                  className="flex items-center gap-2 text-sm md:text-base"
                >
                  <Phone className="size-4 text-muted-foreground" />

                  <span className="text-muted-foreground">Phone</span>

                  <span className="font-semibold text-foreground">
                    +1 647 9457 321
                  </span>
                </a>

                <a
                  href="mailto:support@mytj.ca"
                  className="flex items-center gap-2 text-sm md:text-base"
                >
                  <Mail className="size-4 text-muted-foreground" />

                  <span className="text-muted-foreground">Email</span>

                  <span className="font-semibold text-foreground">
                    support@mytj.ca
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              Virtual Office Hours
            </h2>

            <p className="text-sm leading-6 text-muted-foreground md:text-base">
              Our global support team is available 24/7 for online learners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
