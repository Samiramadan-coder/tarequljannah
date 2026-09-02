import PageBanner from "@/components/reusable/page-banner";
import ContactUsForm from "@/components/contact/contact-us-form";
import ContactIntroSection from "@/components/contact/contact-intro-section";

export default function Page() {
  return (
    <div>
      <PageBanner
        title="Contact Us"
        subtitle="Do you need urgent support?​"
        imageSrc="/contact-us-banner.png"
      />

      <ContactIntroSection />

      <ContactUsForm />
    </div>
  );
}
