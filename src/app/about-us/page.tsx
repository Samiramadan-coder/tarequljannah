import { Journey } from "@/components/about/journy";
import { OurMission } from "@/components/about/our-mission";
import { Stats } from "@/components/about/stats";
import PageBanner from "@/components/reusable/page-banner";

export default function Page() {
  return (
    <div>
      <PageBanner
        title="About Us"
        subtitle="Guiding Hearts, Enlightening Minds – Learn Quran Online with Tareeq Al Jannah"
        imageSrc="/about-banner.png"
      />

      <Journey />

      <Stats />

      <OurMission />
    </div>
  );
}
