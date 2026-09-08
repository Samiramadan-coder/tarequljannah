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
          <p className="mb-2 text-lg font-medium">Our Outstanding Students</p>
          <h2 className="text-5xl font-semibold tracking-tight text-primary">
            Certificates
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
            {certificates.map((certificate, index) => (
              <CarouselItem key={index}>
                <div className="mx-auto flex min-h-57.5 max-w-3xl flex-col items-center justify-center px-12 text-center">
                  <Image
                    src={certificate.image}
                    alt={`Certificate ${index + 1}`}
                    width={700}
                    height={300}
                    className="object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-0 rounded-none border-0 bg-black text-white hover:bg-[#31818c]" />
          <CarouselNext className="right-0 rounded-none border-0 bg-black text-white hover:bg-[#31818c]" />
        </Carousel>

        <div className="mt-8 flex justify-center gap-2">
          {certificates.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to certificate ${index + 1}`}
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
