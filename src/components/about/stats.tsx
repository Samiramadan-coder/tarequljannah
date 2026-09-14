import { Card, CardContent } from "@/components/ui/card";
import * as motion from "motion/react-client";

const stats = [
  {
    value: "58.6K",
    label: "Student enrolled",
    color: "text-[#58b83f]",
  },
  {
    value: "38.6K",
    label: "Class completed",
    color: "text-[#1688c5]",
  },
  {
    value: "98.9%",
    label: "Satisfaction rate",
    color: "text-[#e0ad18]",
  },
  {
    value: "236K",
    label: "Top instructors",
    color: "text-[#a965d1]",
  },
];

export function Stats() {
  return (
    <section className="py-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        className="container grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
                scale: 0.98,
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
              },
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            whileHover={{
              y: -4,
            }}
          >
            <Card className="rounded-none border border-gray-100 bg-white shadow-[0px_4px_24px_rgba(0,0,0,0.06)] ring-0!">
              <CardContent className="flex min-h-23 flex-col items-center justify-center p-4 text-center">
                <motion.span
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.25,
                    delay: 0.1,
                    ease: "easeOut",
                  }}
                  className={`text-3xl font-bold tracking-tight ${stat.color}`}
                >
                  {stat.value}
                </motion.span>

                <span className="mt-2 text-base font-medium text-gray-700">
                  {stat.label}
                </span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
