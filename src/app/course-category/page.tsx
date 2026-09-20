import { ProgramsSection } from "@/components/landing/programs";
import PageBanner from "@/components/reusable/page-banner";

export default function Page() {
  return (
    <div>
      <PageBanner
        title="Our Programs"
        subtitle=""
        imageSrc="/testimonials-banner.webp"
      />

      <div className="py-10">
        <ProgramsSection />
      </div>
    </div>
  );
}
