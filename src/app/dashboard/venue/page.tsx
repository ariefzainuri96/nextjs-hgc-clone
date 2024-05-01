import Button from "@/components/Button";
import { IcSearch } from "@/components/Icons";
import React from "react";

const VenuePage = () => {
  return (
    <div className="mx-[32px] flex flex-col items-start">
      <p className="text-[30px] font-semibold">Venue</p>
      <p className="text-[16px] text-[#475467]">
        This page for Master Data Venue
      </p>
      <div className="mt-[32px] flex w-full flex-row justify-between">
        <div className="flex max-w-[300px] flex-row items-center gap-2 rounded-md border-[1px] border-slate-100 px-[14px] py-[6px]">
          <IcSearch stroke="#667085" width="20" height="20" />
          <input placeholder="Search" className="border-none outline-none" />
        </div>

        <Button content={"Add Venue"} iconName={"search"} />
      </div>
    </div>
  );
};

export default VenuePage;
