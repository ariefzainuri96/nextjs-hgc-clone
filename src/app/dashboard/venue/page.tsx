import Button from "@/components/Button";
import { IcSearch } from "@/components/Icons";
import React from "react";
import VenueTable from "./(components)/VenueTable";

const VenuePage = () => {
  return (
    <div className="mx-[16px] flex flex-col sm:mx-[32px]">
      <p className="text-[30px] font-semibold">Venue</p>
      <p className="text-[16px] text-[#475467]">
        This page for Master Data Venue
      </p>
      <div className="mt-[32px] flex w-full flex-row gap-4">
        <div className="flex flex-1 flex-row">
          <div className="flex w-full flex-row items-center gap-2 rounded-md border-[1px] border-slate-100 px-[14px] py-[6px] sm:max-w-[300px]">
            <IcSearch stroke="#667085" width="20" height="20" />
            <input
              placeholder="Search"
              className="flex-1 border-none outline-none"
            />
          </div>
        </div>

        <Button
          implementBreakPoints={true}
          content={"Add Venue"}
          iconName={"add"}
          variant={"full"}
        />
      </div>
      <div className="w-full overflow-hidden">
        <VenueTable />
      </div>
    </div>
  );
};

export default VenuePage;
