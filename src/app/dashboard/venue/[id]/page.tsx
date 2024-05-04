import BackButtonNav from "@/components/BackButtonNav";
import CustomInput from "@/components/CustomInput";
import { delay } from "@/lib/utils";

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
      <p className="mt-[24px] text-[18px] font-semibold text-[#101828]">
        Venue Detail
      </p>
      <CustomInput
        className="mt-[24px]"
        label={"Venue Name"}
        value="Sedayu Indo Golf"
        enable={false}
      />
    </div>
  );
};

export default DetailVenuePage;
