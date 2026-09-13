import * as motion from "motion/react-client";

import { Card, CardContent } from "@/components/ui/card";

const statistics = [
  {
    value: "11K",
    label: "Student enrolled",
    color: "text-green-600",
  },
  {
    value: "23K",
    label: "Class completed",
    color: "text-sky-500",
  },
  {
    value: "89%",
    label: "Satisfaction rate",
    color: "text-yellow-500",
  },
  {
    value: "200",
    label: "Top instructors",
    color: "text-purple-500",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function StatisticsSection() {
  return (
    <section className="overflow-hidden bg-white px-4 py-10">
      <div className="mx-auto max-w-5xl">
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
            amount: 0.4,
          }}
          transition={{
            duration: 0.5,
            ease,
          }}
          className="mb-7 text-center"
        >
          <p className="text-base">Our Statistics</p>

          <h2 className="relative mt-1 text-4xl font-bold text-foreground/10">
            <span className="relative z-10 text-foreground">
              MYTJ in <span className="text-primary">Numbers</span>
            </span>

            <span className="absolute inset-x-0 -top-1 text-5xl font-bold text-foreground/10">
              MYTJ in Numbers
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {statistics.map((statistic, index) => (
            <motion.div
              key={statistic.label}
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
                ease,
              }}
              whileHover={{
                y: -4,
              }}
            >
              <Card className="rounded-md border border-foreground/20 shadow-none ring-0!">
                <CardContent className="flex min-h-17.5 flex-col items-center justify-center p-3 text-center">
                  <span
                    className={`text-2xl font-bold leading-none ${statistic.color}`}
                  >
                    {statistic.value}
                  </span>
                  <span className="mt-2 text-base">{statistic.label}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
