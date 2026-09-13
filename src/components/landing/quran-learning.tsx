import * as motion from "motion/react-client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import YouTubeLite from "@/components/reusable/youtube-lite";

const questions = [
  {
    value: "item-1",
    title: "Expert Native Arabic Scholars",
    content:
      "Explore a whole new learning Experience with our native Arabic teachers!",
  },
  {
    value: "item-2",
    title: "Easy communication",
    content:
      "All our Quran teachers and Arabic teachers are certified from Al-Azhar University.",
  },
  {
    value: "item-3",
    title: "One-to-one learning experience",
    content:
      "Our classes are made just for you! explore the amazing online learning experience with One-to-one learning!",
  },
  {
    value: "item-4",
    title: "Certified Tutors",
    content:
      "All our Quran teachers and Arabic teachers are certified from Al-Azhar University.",
  },
  {
    value: "item-5",
    title: "Learn From The Comfort Of Your Home!",
    content: "Pick your learning schedule!",
  },
  {
    value: "item-7",
    title: "100% Money-Back Guarantee",
    content: "We will refund your money if you aren’t satisfied in a week",
  },
  {
    value: "item-8",
    title: "24/7 Support & Schedule",
    content: "You can contact us anytime; we are always here for you.",
  },
  {
    value: "item-9",
    title: "Learn with Female Quran Teachers",
    content:
      "For females, you can now learn Quran online, Arabic or Islamic studies with a female Quran teacher from the comfort of your home!",
  },
  {
    value: "item-10",
    title: "Fun and Engaging Learning",
    content:
      "With the help of fun games and activities, online learning has never been easier!",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function QuranLearningSection() {
  return (
    <section className="overflow-hidden px-5 py-12">
      <div className="container grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <motion.div
          initial={{
            opacity: 0,
            x: -24,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.55,
            ease,
          }}
        >
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full"
          >
            {questions.map((question) => (
              <AccordionItem
                key={question.value}
                value={question.value}
                className="border-b border-slate-200"
              >
                <AccordionTrigger className="py-3 text-left text-lg font-semibold hover:no-underline">
                  {question.title}
                </AccordionTrigger>

                <AccordionContent className="pb-3 pr-5 text-base leading-6">
                  {question.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 28,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.65,
            ease,
          }}
          className="relative aspect-video w-full overflow-hidden rounded-xl bg-black"
        >
          <YouTubeLite
            videoId="_cthKaS5rtE"
            title="The Leading Online Quran Platform"
          />
        </motion.div>
      </div>
    </section>
  );
}
