import { ChevronLeft, ChevronRight } from "lucide-react";

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
  return (
    <section className="relative overflow-hidden py-20">
      <div className="container w-full">
        <div className="mb-10 text-center">
          <p className="mb-2 text-lg font-medium">Our Clients Say</p>

          <h2 className="text-5xl font-semibold tracking-tight text-primary">
            Testimonials
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <input
            id="testimonial-radio-1"
            type="radio"
            name="testimonials"
            aria-label="Show testimonial 1"
            defaultChecked
            className="peer/one sr-only"
          />

          <input
            id="testimonial-radio-2"
            type="radio"
            name="testimonials"
            aria-label="Show testimonial 2"
            className="peer/two sr-only"
          />

          <input
            id="testimonial-radio-3"
            type="radio"
            name="testimonials"
            aria-label="Show testimonial 3"
            className="peer/three sr-only"
          />

          <div
            className="
              flex
              transition-transform
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              peer-checked/one:translate-x-0
              peer-checked/two:-translate-x-full
              peer-checked/three:translate-x-[-200%]
            "
          >
            {testimonials.map((testimonial, index) => {
              const previousIndex =
                index === 0 ? testimonials.length - 1 : index - 1;

              const nextIndex =
                index === testimonials.length - 1 ? 0 : index + 1;

              return (
                <article
                  key={testimonial.id}
                  className="relative w-full shrink-0"
                >
                  <div className="mx-auto flex min-h-57.5 max-w-3xl flex-col items-center justify-center px-16 text-center">
                    <h3 className="mb-5 text-lg font-bold">
                      {testimonial.name}
                    </h3>

                    <p className="text-sm leading-7 md:text-base">
                      {testimonial.text}
                    </p>
                  </div>

                  <label
                    htmlFor={`testimonial-radio-${previousIndex + 1}`}
                    aria-label="Previous testimonial"
                    className="
                      absolute left-0 top-1/2
                      flex size-12
                      -translate-y-1/2
                      cursor-pointer
                      items-center justify-center
                      bg-black text-white
                      transition-colors
                      hover:bg-primary
                    "
                  >
                    <ChevronLeft className="size-5" aria-hidden="true" />
                  </label>

                  <label
                    htmlFor={`testimonial-radio-${nextIndex + 1}`}
                    aria-label="Next testimonial"
                    className="
                      absolute right-0 top-1/2
                      flex size-12
                      -translate-y-1/2
                      cursor-pointer
                      items-center justify-center
                      bg-black text-white
                      transition-colors
                      hover:bg-primary
                    "
                  >
                    <ChevronRight className="size-5" aria-hidden="true" />
                  </label>
                </article>
              );
            })}
          </div>
        </div>

        <div
          className="mt-6 flex items-center justify-center"
          aria-label="Testimonials navigation"
        >
          {testimonials.map((testimonial, index) => (
            <label
              key={testimonial.id}
              htmlFor={`testimonial-radio-${index + 1}`}
              aria-label={`Show testimonial ${index + 1} by ${testimonial.name}`}
              className="
                flex size-12
                cursor-pointer
                items-center justify-center
                rounded-full
              "
            >
              <span className="size-2 rounded-full bg-foreground/20 transition-colors hover:bg-primary" />
            </label>
          ))}
        </div>
      </div>
    </section>
  );
}
