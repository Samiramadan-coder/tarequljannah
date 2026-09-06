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

export function StatisticsSection() {
  return (
    <section className="bg-white px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-7 text-center">
          <p className="text-base">Our Statistics</p>

          <h2 className="relative mt-1 text-4xl font-bold text-slate-100">
            <span className="relative z-10 text-foreground">
              MYTJ in <span className="text-primary">Numbers</span>
            </span>

            <span className="absolute inset-x-0 -top-1 text-5xl font-bold text-slate-100">
              MYTJ in Numbers
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {statistics.map((statistic) => (
            <Card
              key={statistic.label}
              className="rounded-md ring-0! border border-slate-200 shadow-none"
            >
              <CardContent className="flex min-h-17.5 flex-col items-center justify-center p-3 text-center">
                <span
                  className={`text-2xl font-bold leading-none ${statistic.color}`}
                >
                  {statistic.value}
                </span>

                <span className="mt-2 text-base text-slate-800">
                  {statistic.label}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
