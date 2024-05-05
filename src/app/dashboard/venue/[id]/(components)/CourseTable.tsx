import { IcEye, IcUpload } from "@/components/Icons";
import { CourseItem } from "@/source/detail_venue_source";
import React from "react";
import { twMerge } from "tailwind-merge";

const CourseTable = ({ courseItem }: { courseItem: CourseItem }) => {
  function bgColor(content: string): string {
    switch (content) {
      case "Black":
        return "bg-[#0E1323]";
      case "Blue":
        return "bg-[#002C52]";
      case "Red":
        return "bg-[#F22B36]";
      case "Par":
        return "bg-[#EFA906]";
      default:
        return "bg-[#FFF]";
    }
  }

  function textColor(content: string): string {
    if (RegExp("Black|Blue|Red").test(content)) return "text-[#FFF]";
    else return "text-[#000]";
  }

  return (
    <div className="mt-[12px] flex flex-col overflow-x-auto rounded-xl border-[1px] border-[#EAECF0]">
      <table className="table">
        <thead>
          <tr className="text-center text-[14px] font-semibold text-[#475467]">
            <th className="border-r-[1px] border-r-slate-100 px-[16px] py-[7px] text-left">
              Hole
            </th>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((element, index) => {
              return (
                <td
                  className={
                    (index !== 8 ? "border-r-[1px] border-r-slate-100 " : "") +
                    "px-[16px] py-[7px]"
                  }
                  key={element}
                >
                  {element}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {courseItem.courseTable.map((element, index) => {
            return (
              <tr
                key={element.name}
                className={twMerge(
                  bgColor(element.name),
                  textColor(element.name),
                  "text-center text-[14px] font-semibold",
                )}
              >
                <th className="border-r-[1px] border-r-slate-100 px-[16px] py-[7px] text-left font-semibold">
                  {element.name}
                </th>
                {element.values.map((_element, index) => {
                  return (
                    <td
                      className={
                        (index !== element.values.length - 1
                          ? "border-r-[1px] border-r-slate-100 "
                          : "") + "px-[16px] py-[7px]"
                      }
                      key={index}
                    >
                      {_element}
                    </td>
                  );
                })}
              </tr>
            );
          })}
          <tr className={"bg-[#D5DEE7]"}>
            <th className="border-r-[1px] border-r-slate-100 px-[16px] py-[7px] text-[14px] font-semibold">
              Upload Course Layout
            </th>
            {courseItem.courseLayout.map((_element, index) => {
              return (
                <td
                  className={
                    (index !== courseItem.courseLayout.length - 1
                      ? "border-r-[1px] border-r-slate-100 "
                      : "") + "px-1 py-1"
                  }
                  key={index}
                >
                  <div className="flex flex-row justify-center rounded-lg bg-white px-[8px] py-[8px]">
                    {_element !== "" ? (
                      <IcEye width="24" height="24" />
                    ) : (
                      <IcUpload width="24" height="24" />
                    )}
                  </div>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;
