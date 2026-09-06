"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Rahma Arabi",
    image: "/images/testimonials/rahma.jpg",
    text: "My kids were absolutely thrilled with the experience. The team was incredibly professional and made learning feel fun and engaging.",
  },
  {
    name: "Sarah Johnson",
    image: "/images/testimonials/sarah.jpg",
    text: "The program was well organized and easy to follow. My children gained confidence and really enjoyed every session.",
  },
  {
    name: "Ahmed Ali",
    image: "/images/testimonials/ahmed.jpg",
    text: "A great experience from start to finish. The instructors were patient, supportive, and very knowledgeable.",
  },
];

export function TestimonialsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const autoplay = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

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
      <div className="w-full container">
        <div className="mb-10 text-center">
          <p className="mb-2 text-lg font-medium">Our Clients Say</p>
          <h2 className="text-5xl font-semibold tracking-tight text-primary">
            Testimonials
          </h2>
        </div>

        <Carousel
          setApi={setApi}
          // eslint-disable-next-line react-hooks/refs
          plugins={[autoplay.current]}
          opts={{
            loop: true,
            align: "center",
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.name}>
                <div className="mx-auto flex min-h-57.5 max-w-3xl flex-col items-center justify-center px-12 text-center">
                  <Avatar className="mb-3 h-14 w-14">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>

                  <h3 className="mb-5 text-lg font-bold">{testimonial.name}</h3>

                  <p className="text-sm leading-7 md:text-base">
                    {testimonial.text}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-0 rounded-none border-0 bg-black text-white hover:bg-[#31818c]" />
          <CarouselNext className="right-0 rounded-none border-0 bg-black text-white hover:bg-[#31818c]" />
        </Carousel>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                current === index ? "w-6 bg-[#31818c]" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
