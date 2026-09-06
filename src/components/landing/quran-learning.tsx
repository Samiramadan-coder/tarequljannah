import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

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

export function QuranLearningSection() {
  return (
    <section className="px-5 py-12">
      <div className="container grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {questions.map((question) => (
            <AccordionItem
              key={question.value}
              value={question.value}
              className="border-b border-slate-200"
            >
              <AccordionTrigger className="py-3 text-left text-lg font-semibold hover:no-underline">
                <span>{question.title}</span>
              </AccordionTrigger>

              <AccordionContent className="pb-3 pr-5 text-base leading-6">
                {question.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="relative aspect-video w-full overflow-hidden">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/_cthKaS5rtE?si=Yf9Uc6XopsFb3W2T&enablejsapi=1&origin=https://www.tareequljannah.com"
            title="The Leading Online Quran Platform"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
