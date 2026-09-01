import ContactIntroSection from "@/components/about/contact-intro-section";
import PageBanner from "@/components/reusable/page-banner";

export default function Page() {
  return (
    <div>
      <PageBanner
        title="Contact Us"
        subtitle="Do you need urgent support?​"
        imageSrc="/contact-us-banner.png"
      />

      <ContactIntroSection />
    </div>
  );
}
