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
    text: "My two kids are studying at TareequlJannah institute and it's a very good experience as the teacher are so experienced and professional they care a lot about the learning level of the kids. I can follow up step by step with the teacher as i receive email after each class that tells me what the kids learned and what is the homework. Alhamdulillah that I could find such a amazing program to help me and my kids and take us to Jannah. May Allah reward every one there for their efforts.",
  },
  {
    name: "Sarah Johnson",
    image: "/images/testimonials/sarah.jpg",
    text: "My two kids are studying at TareequlJannah institute and it's a very good experience as the teacher are so experienced and professional they care a lot about the learning level of the kids. I can follow up step by step with the teacher as i receive email after each class that tells me what the kids learned and what is the homework. Alhamdulillah that I could find such a amazing program to help me and my kids and take us to Jannah. May Allah reward every one there for their efforts.",
  },
  {
    name: "Ahmed Ali",
    image: "/images/testimonials/ahmed.jpg",
    text: "My two kids are studying at TareequlJannah institute and it's a very good experience as the teacher are so experienced and professional they care a lot about the learning level of the kids. I can follow up step by step with the teacher as i receive email after each class that tells me what the kids learned and what is the homework. Alhamdulillah that I could find such a amazing program to help me and my kids and take us to Jannah. May Allah reward every one there for their efforts.",
  },
];

export function OpinionsCarousel() {
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
                <div className="mx-auto flex min-h-57.5 max-w-5xl flex-col items-center justify-center px-12 text-center">
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
