import Image from "next/image";
import * as motion from "motion/react-client";

const features = [
  {
    icon: "/journey-1.svg",
    title: "Expert Quran Arabic Teachers",
    description: "We provide native Arabic teachers for Quran learning.",
  },
  {
    icon: "/journey-2.svg",
    title: "One-to-One Learning Experience",
    description: "One-to-one learning sessions with a personalized approach.",
  },
  {
    icon: "/journey-3.svg",
    title: "Certified Tutors",
    description: "Al-Azhar certified professional Quran teachers.",
  },
  {
    icon: "/journey-4.svg",
    title: "Live Online Classes",
    description: "Live private classes with flexible schedules.",
  },
  {
    icon: "/journey-5.svg",
    title: "100% Money-Back Guarantee",
    description: "We will refund your money if you are not satisfied.",
  },
  {
    icon: "/journey-6.svg",
    title: "24/7 Support & Schedule",
    description: "We are available for your convenience at any time.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function LearningFeatures() {
  return (
    <section className="overflow-hidden px-6 py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.5,
            ease,
          }}
          className="mb-10 text-center"
        >
          <h2 className="text-5xl font-bold text-slate-100">
            We provide different learning
          </h2>

          <h2 className="text-lg font-bold">Why us?</h2>

          <p className="mt-2 text-4xl font-semibold">
            We Provide Different Learning{" "}
            <span className="text-primary">Journey</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-14 gap-y-9 md:grid-cols-3">
          {features.map(({ icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
                ease,
              }}
              className="text-center"
            >
              <motion.div
                whileHover={{
                  y: -4,
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.2,
                  ease,
                }}
                className="mx-auto w-fit"
              >
                <Image src={icon} alt={title} width={80} height={80} />
              </motion.div>

              <h3 className="mt-3 font-semibold text-primary">{title}</h3>

              <p className="mx-auto mt-2 leading-4 text-foreground/50">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
