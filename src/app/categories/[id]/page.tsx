import { http } from "@/lib/http";
import { Course } from "../../../../types/courses";
import PageBanner from "@/components/reusable/page-banner";
import ListOfCourses from "@/components/courses/list-of-courses";

type Params = {
  id: string;
};

export default async function Page({ params }: { params: Promise<Params> }) {
  const { id } = await params;

  const { data, ok } = await http.get<{ data: Course[] }>(
    "/api/v1/website/courses",
    {
      params: {
        category: id,
      },
    },
  );

  if (!ok) {
    throw new Error("Failed to fetch categories");
  }

  return (
    <div>
      <PageBanner
        title={data.data?.[0].categories[0].name}
        imageSrc="/programs-details.webp"
      />

      <div className="py-10">
        <ListOfCourses courses={data.data} />
      </div>
    </div>
  );
}
