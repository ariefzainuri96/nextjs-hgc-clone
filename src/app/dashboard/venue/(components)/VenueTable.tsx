"use client";

import { IcArrowUp, IcTrash } from "@/components/Icons";
import { venueList } from "@/source/venue_source";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const VenueTable = () => {
  const params = useSearchParams();

  return (
    <div className="mt-[32px] flex flex-col overflow-x-auto rounded-lg border-[1px] border-[#EAECF0]">
      <table className="table">
        <thead>
          <tr>
            <th className="text-[12px] font-medium text-[#475467]">Actions</th>
            <th className="text-[12px] font-medium text-[#475467]">
              Venue Name
            </th>
            <th className="text-[12px] font-medium text-[#475467]">
              Venue Address
            </th>
            <th className="text-[12px] font-medium text-[#475467]">
              PIC Marketing Name
            </th>
            <th className="text-[12px] font-medium text-[#475467]">
              PIC Marketing Phone
            </th>
            <th className="text-[12px] font-medium text-[#475467]">
              See Detail
            </th>
          </tr>
        </thead>
        <tbody>
          {venueList.map((element, index) => {
            return (
              <tr
                key={element.venueName}
                className={index % 2 !== 0 ? "bg-[#F9FAFB]" : ""}
              >
                <th>
                  <div className="flex w-full cursor-pointer flex-row justify-center">
                    <IcTrash />
                  </div>
                </th>
                <td className="text-sm font-medium text-[#101828]">
                  {element.venueName}
                </td>
                <td className="text-sm font-medium text-[#101828]">
                  {element.venueAddress}
                </td>
                <td className="text-sm font-medium text-[#101828]">
                  {element.picMarketingName}
                </td>
                <td className="text-sm font-medium text-[#101828]">
                  {element.picMarketingPhone}
                </td>
                <td>
                  <Link
                    className="flex rotate-90 cursor-pointer flex-col items-center"
                    href={`/dashboard/venue/${element.id}?${params}`}
                  >
                    <IcArrowUp />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="h-[1px] w-full bg-[#EAECF0]" />
      <div className="flex w-full flex-row items-center px-[24px] py-[12px]">
        <div className="flex flex-1 flex-row">
          <button className="mr-[12px] rounded-lg border-[1px] border-[#D0D5DD] px-[14px] py-[8px] hover:bg-slate-100">
            Previous
          </button>
          <button className="mr-[12px] rounded-lg border-[1px] border-[#D0D5DD] px-[14px] py-[8px] hover:bg-slate-100">
            Next
          </button>
        </div>
        <p className="text-sm font-medium text-[#344054]">Page 1 of 10</p>
      </div>
    </div>
  );
};

export default VenueTable;
