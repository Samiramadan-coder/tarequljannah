import Link from "next/link";
import Image from "next/image";
import * as motion from "motion/react-client";
import { Category } from "../../../types/courses";
import { Card, CardContent } from "@/components/ui/card";

const ease = [0.22, 1, 0.36, 1] as const;

function ProgramCard({ item, index }: { item: Category; index: number }) {
  return (
    <Link href={`/courses/${item.slug}`}>
      <motion.div
        initial={{
          opacity: 0,
          y: 28,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.55,
          delay: index * 0.06,
          ease,
        }}
      >
        <Card className="overflow-hidden rounded-none bg-white shadow-none ring-0!">
          <motion.div
            whileHover={{
              y: -4,
            }}
            transition={{
              duration: 0.25,
              ease,
            }}
          >
            <div className="relative aspect-[1.55/1] overflow-hidden rounded-[3px]">
              <motion.div
                className="absolute inset-0"
                whileHover={{
                  scale: 1.035,
                }}
                transition={{
                  duration: 0.35,
                  ease,
                }}
              >
                <Image
                  src={
                    "https://www.tareequljannah.com/wp-content/uploads/2025/12/arabic-test-768x768-1.webp"
                  }
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </motion.div>
            </div>

            <CardContent className="px-1 pt-1.5 text-center">
              <h3 className="text-base font-semibold">{item.name}</h3>
              <p className="mt-1 text-base leading-[1.45]">
                {item.description}
              </p>
            </CardContent>
          </motion.div>
        </Card>
      </motion.div>
    </Link>
  );
}

export function ProgramsSection({ categories }: { categories: Category[] }) {
  return (
    <section className="overflow-hidden bg-white px-4 py-8">
      <div className="container max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.5,
            ease,
          }}
          className="mb-5 text-center"
        >
          <p className="-mt-1 text-3xl font-bold">
            Explore <span className="text-primary">Our Programs</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <ProgramCard key={category.name} item={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
