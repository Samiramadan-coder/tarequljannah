import { http } from "@/lib/http";
import { Category } from "../../../types/courses";
import PageBanner from "@/components/reusable/page-banner";
import { ProgramsSection } from "@/components/landing/programs";

export default async function Page() {
  const { data, ok } = await http.get<{ data: Category[] }>(
    "/api/v1/admin/categories?type=course",
  );

  if (!ok) {
    throw new Error("Failed to fetch categories");
  }

  console.log(data.data);
  return (
    <div>
      <PageBanner
        title="Our Programs"
        subtitle=""
        imageSrc="/testimonials-banner.webp"
      />

      <div className="py-10">
        <ProgramsSection categories={data.data} />
      </div>
    </div>
  );
}
