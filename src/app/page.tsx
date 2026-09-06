import LearningFeatures from "@/components/landing/learning-features";
import { Hero } from "@/components/landing/hero";
import RequestFreeDemo from "@/components/shared/request-free-demo";
import { ProgramsSection } from "@/components/landing/programs";
import { QuranLearningSection } from "@/components/landing/quran-learning";

export default function Home() {
  return (
    <main>
      <Hero />
      <LearningFeatures />
      <ProgramsSection />
      <QuranLearningSection />
      <RequestFreeDemo />
    </main>
  );
}
