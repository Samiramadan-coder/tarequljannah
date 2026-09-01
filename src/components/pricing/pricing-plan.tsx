import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    classes: 8,
    subtitle: "We are just warming up",
    price: 45,
    days: 2,
    perClass: 5.6,
  },
  {
    classes: 12,
    subtitle: "We are just getting started",
    price: 60,
    days: 3,
    perClass: 5,
  },
  {
    classes: 16,
    subtitle: "The most popular plan",
    price: 75,
    days: 4,
    perClass: 4.7,
    popular: true,
  },
  {
    classes: 20,
    subtitle: "We mean serious business!",
    price: 88,
    days: 5,
    perClass: 4.4,
  },
  {
    classes: 24,
    subtitle: "We're on the fast track!",
    price: 100,
    days: 6,
    perClass: 4.2,
  },
  {
    classes: 28,
    subtitle: "Welcome to the ultimate experience!",
    price: 110,
    days: 7,
    perClass: 3.9,
  },
];

export default function PricingPlans() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.classes}
              className="overflow-hidden rounded-lg py-0 shadow-none"
            >
              <CardHeader
                className={cn(
                  "gap-2 px-7 py-7 text-white",
                  plan.popular ? "bg-[#f5a000]" : "bg-[#287785]",
                )}
              >
                <CardTitle className="text-xl font-semibold">
                  {plan.classes} Classes
                </CardTitle>

                <p className="text-sm text-white/90">{plan.subtitle}</p>

                <p className="pt-2 text-4xl font-bold">
                  USD {plan.price.toFixed(2)}
                </p>
              </CardHeader>

              <CardContent className="flex min-h-56 flex-col px-7 py-7">
                <div className="space-y-5">
                  <Feature>{plan.days} days / week</Feature>

                  <Feature>30 minutes / day</Feature>

                  <Feature>${plan.perClass.toFixed(1)} / class</Feature>
                </div>

                <Button variant="outline" className="mt-7 w-full">
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <Check className="size-4 shrink-0 text-primary" />

      <span>{children}</span>
    </div>
  );
}
