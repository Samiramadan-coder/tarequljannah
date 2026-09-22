import { http } from "@/lib/http";
import Hero from "@/components/landing/hero";
import { Category } from "../../types/courses";
import { ProgramsSection } from "@/components/landing/programs";
import RequestFreeDemo from "@/components/shared/request-free-demo";
import { StatisticsSection } from "@/components/landing/statistics";
import LearningFeatures from "@/components/landing/learning-features";
import { TestimonialsCarousel } from "@/components/landing/testimonials";
import { QuranLearningSection } from "@/components/landing/quran-learning";

export default async function Home() {
  const { data, ok } = await http.get<{ data: Category[] }>(
    "/api/v1/admin/categories?type=course",
  );

  if (!ok) {
    throw new Error("Failed to fetch categories");
  }

  return (
    <main>
      <Hero />
      <LearningFeatures />
      <ProgramsSection categories={data.data} />
      <QuranLearningSection />
      <StatisticsSection />
      <TestimonialsCarousel />
      <RequestFreeDemo />
    </main>
  );
}
