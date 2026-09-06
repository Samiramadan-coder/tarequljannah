import Image from "next/image";
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

function ProgramCard({
  title,
  image,
  description,
}: {
  title: string;
  image: string;
  description: string;
}) {
  return (
    <Card className="overflow-hidden rounded-none ring-0! bg-white shadow-none">
      <div className="relative aspect-[1.55/1] overflow-hidden rounded-[3px]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <CardContent className="px-1 pt-1.5 text-center">
        <h3 className="font-semibold text-base">{title}</h3>
        <p className="text-base mt-1 leading-[1.45]">{description}</p>
      </CardContent>
    </Card>
  );
}

export function ProgramsSection() {
  return (
    <section className="bg-white px-4 py-8">
      <div className="container max-w-7xl">
        <div className="mb-5 text-center">
          <h2 className="text-5xl font-bold text-slate-100">
            Explore Our Programs
          </h2>

          <p className="-mt-1 text-3xl font-bold">
            Explore <span className="text-primary">Our Programs</span>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}
