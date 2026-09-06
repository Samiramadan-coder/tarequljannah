import LearningFeatures from "@/components/landing/learning-features";
import { Hero } from "@/components/landing/hero";
import RequestFreeDemo from "@/components/shared/request-free-demo";
import { ProgramsSection } from "@/components/landing/programs";
import { QuranLearningSection } from "@/components/landing/quran-learning";
import { StatisticsSection } from "@/components/landing/statistics";
import { TestimonialsCarousel } from "@/components/landing/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <LearningFeatures />
      <ProgramsSection />
      <QuranLearningSection />
      <StatisticsSection />
      <TestimonialsCarousel />
      <RequestFreeDemo />
    </main>
  );
}
