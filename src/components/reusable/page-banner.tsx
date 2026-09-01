import Image from "next/image";

type PageBannerProps = {
  title: string;
  subtitle?: string;
  imageSrc: string;
};

export default function PageBanner({
  title,
  subtitle,
  imageSrc,
}: PageBannerProps) {
  return (
    <section className="relative isolate h-75 overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/35 to-black/65" />

      <div className="container relative z-10 flex h-full items-center justify-center">
        <div className="max-w-3xl text-center text-white">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/80 md:text-base">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
