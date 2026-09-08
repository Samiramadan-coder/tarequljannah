import PageBanner from "@/components/reusable/page-banner";
import { CertificatesCarousel } from "@/components/testimonials/certificates";
import { OpinionsCarousel } from "@/components/testimonials/opinions";

export default function Page() {
  return (
    <div>
      <PageBanner
        title="Testimonials"
        subtitle="Our Clients says"
        imageSrc="/testimonials-banner.png"
      />

      <OpinionsCarousel />

      <CertificatesCarousel />
    </div>
  );
}
