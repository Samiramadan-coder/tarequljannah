import PricingIntroSection from "@/components/pricing/pricing-intro-section";
import PricingPlans from "@/components/pricing/pricing-plan";
import PageBanner from "@/components/reusable/page-banner";

export default function Page() {
  return (
    <div>
      <PageBanner
        title="Our Pricing"
        subtitle="Get Access to our courses"
        imageSrc="/pricing-banner.webp"
      />
      <PricingIntroSection />
      <PricingPlans />
    </div>
  );
}
