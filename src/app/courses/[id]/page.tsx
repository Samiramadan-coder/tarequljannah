import ListOfCategories from "@/components/courses/list-of-categories";
import PageBanner from "@/components/reusable/page-banner";

export default function Page() {
  return (
    <div>
      <PageBanner
        title="Arabic"
        subtitle=""
        imageSrc="/programs-details.webp"
      />

      <div className="py-10">
        <ListOfCategories />
      </div>
    </div>
  );
}
