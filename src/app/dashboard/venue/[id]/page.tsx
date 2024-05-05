import BackButtonNav from "@/components/BackButtonNav";
import { delay } from "@/lib/utils";
import VenueDetail from "./(components)/VenueDetail";
import CourseDetail from "./(components)/CourseDetail";

interface DetailVenuePageProps {
  params: {
    id: string;
  };
}

const DetailVenuePage = async ({ params: { id } }: DetailVenuePageProps) => {
  await delay(1000);

  return (
    <div className="mx-[16px] flex flex-col sm:mx-[32px]">
      <div className="flex flex-row items-center gap-3">
        <BackButtonNav />
        <p className="text-3xl font-semibold text-[#101828]">
          Detail Info Venue
        </p>
      </div>
      <div className="mt-[32px] h-[1px] w-full bg-[#EAECF0]" />
      <VenueDetail />
      <CourseDetail />
    </div>
  );
};

export default DetailVenuePage;
