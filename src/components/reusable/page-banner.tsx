import Image from "next/image";

export default function PageBanner({
  title,
  subtitle,
  imageSrc,
}: {
  title: string;
  subtitle: string;
  imageSrc: string;
}) {
  return (
    <div className="h-75 relative">
      <div className="absolute inset-0 bg-black opacity-50" />

      <Image
        src={imageSrc}
        alt="Page Banner"
        width={1200}
        height={300}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="mt-2 text-lg">{subtitle}</p>
      </div>
    </div>
  );
}
