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
import Image from "next/image";

const certificates = [
  {
    image: "/certificate-1.png",
  },
  {
    image: "/certificate-2.png",
  },
  {
    image: "/certificate-3.png",
  },
  {
    image: "/certificate-4.png",
  },
];

export function CertificatesCarousel() {
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
    <section className="py-20">
      <div className="container w-full">
        <div className="mb-10 text-center">
          <p className="mb-2 text-lg font-medium">Our Outstanding Students</p>

          <h2 className="text-4xl font-semibold tracking-tight text-primary md:text-5xl">
            Certificates
          </h2>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: "start",
          }}
          className="w-full px-12 md:px-16"
        >
          <CarouselContent className="-ml-4">
            {certificates.map((certificate, index) => (
              <CarouselItem
                key={index}
                className="basis-full pl-4 md:basis-1/2"
              >
                <div className="flex items-center justify-center">
                  <Image
                    src={certificate.image}
                    alt={`Certificate ${index + 1}`}
                    width={700}
                    height={400}
                    className="h-auto w-full object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className="
              left-0
              size-10
              rounded-full
              border-0
              bg-black
              text-white
              hover:bg-primary
              hover:text-white
            "
          />

          <CarouselNext
            className="
              right-0
              size-10
              rounded-full
              border-0
              bg-black
              text-white
              hover:bg-primary
              hover:text-white
            "
          />
        </Carousel>

        <div
          className="mt-6 flex items-center justify-center"
          aria-label="Certificates navigation"
        >
          {certificates.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show certificate ${index + 1}`}
              onClick={() => api?.scrollTo(index)}
              className="flex size-10 items-center justify-center rounded-full"
            >
              <span
                className={`size-2 rounded-full transition-colors ${
                  current === index
                    ? "bg-primary"
                    : "bg-foreground/20 hover:bg-primary"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
