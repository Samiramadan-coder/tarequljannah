"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: "testimonial-1",
    name: "Rahma Arabi",
    text: "My kids were absolutely thrilled with the experience. The team was incredibly professional and made learning feel fun and engaging.",
  },
  {
    id: "testimonial-2",
    name: "Sarah Johnson",
    text: "The program was well organized and easy to follow. My children gained confidence and really enjoyed every session.",
  },
  {
    id: "testimonial-3",
    name: "Ahmed Ali",
    text: "A great experience from start to finish. The instructors were patient, supportive, and very knowledgeable.",
  },
];

export function TestimonialsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="relative overflow-hidden py-20">
      <div className="container w-full">
        <div className="mb-10 text-center">
          <p className="mb-2 text-lg font-medium">Our Clients Say</p>

          <h2 className="text-4xl font-semibold tracking-tight text-primary md:text-5xl">
            Testimonials
          </h2>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: "center",
          }}
          className="w-full px-12 md:px-16"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <article className="mx-auto flex min-h-57.5 max-w-3xl flex-col items-center justify-center text-center">
                  <h3 className="mb-5 text-lg font-bold">{testimonial.name}</h3>

                  <p className="text-sm leading-7 md:text-base">
                    {testimonial.text}
                  </p>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-0 size-10 rounded-full border-0 bg-black text-white hover:bg-primary hover:text-white" />

          <CarouselNext className="right-0 size-10 rounded-full border-0 bg-black text-white hover:bg-primary hover:text-white" />
        </Carousel>

        <div
          className="mt-6 flex items-center justify-center"
          aria-label="Testimonials navigation"
        >
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              aria-label={`Show testimonial ${index + 1} by ${testimonial.name}`}
              onClick={() => api?.scrollTo(index)}
              className="flex size-10 cursor-pointer items-center justify-center rounded-full"
            >
              <span
                className={
                  current === index
                    ? "size-2 rounded-full bg-primary transition-colors"
                    : "size-2 rounded-full bg-foreground/20 transition-colors hover:bg-primary"
                }
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
