import { http } from "@/lib/http";
import { Course } from "../../../../types/courses";
import PageBanner from "@/components/reusable/page-banner";
import ListOfCourses from "@/components/courses/list-of-courses";

export default async function Page() {
  const { data, ok } = await http.get<{ data: Course[] }>(
    "/api/v1/admin/courses",
  );

  if (!ok) {
    throw new Error("Failed to fetch categories");
  }

  return (
    <div>
      <PageBanner
        title="Arabic"
        subtitle=""
        imageSrc="/programs-details.webp"
      />

      <div className="py-10">
        <ListOfCourses courses={data.data} />
      </div>
    </div>
  );
}
