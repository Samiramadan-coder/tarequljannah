import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: "testimonial-1",
    name: "Rahma Arabi",
    image: "/images/testimonials/rahma.jpg",
    text: "My kids were absolutely thrilled with the experience. The team was incredibly professional and made learning feel fun and engaging.",
  },
  {
    id: "testimonial-2",
    name: "Sarah Johnson",
    image: "/images/testimonials/sarah.jpg",
    text: "The program was well organized and easy to follow. My children gained confidence and really enjoyed every session.",
  },
  {
    id: "testimonial-3",
    name: "Ahmed Ali",
    image: "/images/testimonials/ahmed.jpg",
    text: "A great experience from start to finish. The instructors were patient, supportive, and very knowledgeable.",
  },
];

export function TestimonialsCarousel() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="container w-full">
        <div className="mb-10 text-center">
          <p className="mb-2 text-lg font-medium">Our Clients Say</p>

          <h2 className="text-5xl font-semibold tracking-tight text-primary">
            Testimonials
          </h2>
        </div>

        <div className="relative">
          <div
            className="
              flex w-full snap-x snap-mandatory
              overflow-x-auto scroll-smooth
              scrollbar-none
              [&::-webkit-scrollbar]:hidden
            "
          >
            {testimonials.map((testimonial, index) => {
              const previous =
                testimonials[index === 0 ? testimonials.length - 1 : index - 1];

              const next =
                testimonials[index === testimonials.length - 1 ? 0 : index + 1];

              return (
                <article
                  id={testimonial.id}
                  key={testimonial.id}
                  className="relative w-full shrink-0 snap-center"
                >
                  <div className="mx-auto flex min-h-57.5 max-w-3xl flex-col items-center justify-center px-14 text-center">
                    <h3 className="mb-5 text-lg font-bold">
                      {testimonial.name}
                    </h3>

                    <p className="text-sm leading-7 md:text-base">
                      {testimonial.text}
                    </p>
                  </div>

                  <a
                    href={`#${previous.id}`}
                    aria-label="Previous testimonial"
                    className="
                      absolute left-0 top-1/2
                      flex size-10 -translate-y-1/2
                      items-center justify-center
                      bg-black text-white
                      transition-colors
                      hover:bg-primary
                    "
                  >
                    <ChevronLeft className="size-5" />
                  </a>

                  <a
                    href={`#${next.id}`}
                    aria-label="Next testimonial"
                    className="
                      absolute right-0 top-1/2
                      flex size-10 -translate-y-1/2
                      items-center justify-center
                      bg-black text-white
                      transition-colors
                      hover:bg-primary
                    "
                  >
                    <ChevronRight className="size-5" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((testimonial) => (
            <a
              key={testimonial.id}
              href={`#${testimonial.id}`}
              aria-label={`Go to ${testimonial.name} testimonial`}
              className="size-2 rounded-full bg-foreground/20 transition-all hover:bg-primary"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
