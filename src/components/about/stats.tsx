import { Card, CardContent } from "@/components/ui/card";

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
      <div className="container grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card
            key={stat.label}
            className="rounded-none ring-0! border border-gray-100 bg-white shadow-[0px_4px_24px_rgba(0,0,0,0.06)]"
          >
            <CardContent className="flex min-h-23 flex-col items-center justify-center p-4 text-center">
              <span
                className={`text-3xl font-bold tracking-tight ${stat.color}`}
              >
                {stat.value}
              </span>

              <span className="mt-2 text-base font-medium text-gray-700">
                {stat.label}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
