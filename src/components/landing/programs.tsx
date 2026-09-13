import Image from "next/image";
import * as motion from "motion/react-client";

import { Card, CardContent } from "@/components/ui/card";

const programs = [
  {
    title: "Arabic",
    image:
      "https://www.tareequljannah.com/wp-content/uploads/2025/12/arabic-test-768x768-1.webp",
    description:
      "Learn Arabic online and gain fluency in the language. Whether you are a beginner or seeking to enhance your skills, our live classes will help you master Arabic.",
  },
  {
    title: "Ijazah",
    image:
      "https://www.tareequljannah.com/wp-content/uploads/2025/12/arabic-test-768x768-1.webp",
    description:
      "Get the highest certificate and become among the best Muslims to learn the Quran perfectly with Ijazah. Gain confidence in your recitation and learn it with our qualified teachers.",
  },
  {
    title: "Islamic Studies",
    image:
      "https://www.tareequljannah.com/wp-content/uploads/2025/12/arabic-test-768x768-1.webp",
    description:
      "Learn Islamic Studies about the beauty of Islam and its teachings from scratch, in fun and easy ways with the best teachers.",
  },
  {
    title: "Quran",
    image:
      "https://www.tareequljannah.com/wp-content/uploads/2025/12/arabic-test-768x768-1.webp",
    description:
      "Learn Quran online with qualified teachers through interactive and easy-to-follow lessons.",
  },
  {
    title: "Tajweed",
    image:
      "https://www.tareequljannah.com/wp-content/uploads/2025/12/arabic-test-768x768-1.webp",
    description:
      "Improve your Quran recitation and learn the correct Tajweed rules with experienced teachers.",
  },
  {
    title: "Revert Program",
    image:
      "https://www.tareequljannah.com/wp-content/uploads/2025/12/arabic-test-768x768-1.webp",
    description:
      "A special program for new Muslims to learn the basics of Islam in a simple and supportive environment.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

function ProgramCard({
  title,
  image,
  description,
  index,
}: {
  title: string;
  image: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 28,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease,
      }}
    >
      <Card className="overflow-hidden rounded-none bg-white shadow-none ring-0!">
        <motion.div
          whileHover={{
            y: -4,
          }}
          transition={{
            duration: 0.25,
            ease,
          }}
        >
          <div className="relative aspect-[1.55/1] overflow-hidden rounded-[3px]">
            <motion.div
              className="absolute inset-0"
              whileHover={{
                scale: 1.035,
              }}
              transition={{
                duration: 0.35,
                ease,
              }}
            >
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          <CardContent className="px-1 pt-1.5 text-center">
            <h3 className="text-base font-semibold">{title}</h3>

            <p className="mt-1 text-base leading-[1.45]">{description}</p>
          </CardContent>
        </motion.div>
      </Card>
    </motion.div>
  );
}

export function ProgramsSection() {
  return (
    <section className="overflow-hidden bg-white px-4 py-8">
      <div className="container max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.5,
            ease,
          }}
          className="mb-5 text-center"
        >
          <h2 className="text-5xl font-bold text-foreground/10">
            Explore Our Programs
          </h2>

          <p className="-mt-1 text-3xl font-bold">
            Explore <span className="text-primary">Our Programs</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <ProgramCard key={program.title} {...program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
