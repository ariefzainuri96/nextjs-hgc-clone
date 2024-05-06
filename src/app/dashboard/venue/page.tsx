import Button from "@/components/Button";
import { IcSearch } from "@/components/Icons";
import React from "react";
import VenueTable from "./(components)/VenueTable";
import DeleteDataDialog from "@/components/DeleteDataDialog";
import { deleteVenue } from "./actions";
import Link from "next/link";
import AddVenue from "./(components)/AddVenue";

const VenuePage = () => {
  return (
    <div className="mx-[16px] flex flex-col sm:mx-[32px]">
      <p className="text-[30px] font-semibold">Venue</p>
      <p className="text-[16px] text-[#475467]">
        This page for Master Data Venue
      </p>
      <div className="mt-[32px] flex w-full flex-col gap-3 sm:flex-row">
        <div className="flex flex-row sm:flex-1">
          <div className="flex w-full flex-row items-center gap-2 rounded-md border-[1px] border-slate-100 px-[14px] py-[6px] sm:max-w-[300px]">
            <IcSearch stroke="#667085" width="20" height="20" />
            <input
              placeholder="Search"
              className="flex-1 border-none outline-none"
            />
          </div>
        </div>

        <div className="flex flex-row justify-end">
          <AddVenue />
        </div>
      </div>
      <div className="mb-[16px] w-full overflow-hidden">
        <VenueTable />
      </div>
      <DeleteDataDialog formAction={deleteVenue} />
    </div>
  );
};

export default VenuePage;
