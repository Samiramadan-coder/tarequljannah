import PageBanner from "@/components/reusable/page-banner";

type Params = {
  id: string;
};

export default async function Page({ params }: { params: Promise<Params> }) {
  const { id } = await params;

  return (
    <div>
      <PageBanner title={id} imageSrc="/programs-details.webp" />
    </div>
  );
}
