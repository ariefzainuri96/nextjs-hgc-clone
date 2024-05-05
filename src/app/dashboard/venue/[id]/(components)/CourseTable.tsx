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
    <div className="mt-[12px] flex flex-row overflow-hidden rounded-xl border-[1px] border-[#EAECF0]">
      <div className="overflow-hidden">
        <table className="table">
          <thead>
            <tr className="text-center text-[14px] font-semibold text-[#475467]">
              <th className="border-r-[1px] border-r-slate-100 px-[16px] py-[7px] text-left">
                Hole
              </th>
            </tr>
          </thead>
          <tbody>
            {courseItem.courseTable.map((element) => {
              return (
                <tr
                  className={twMerge(
                    bgColor(element.name),
                    textColor(element.name),
                    "text-center text-[14px] font-semibold",
                  )}
                  key={element.name}
                >
                  <th className="border-r-[1px] border-r-slate-100 px-[16px] py-[7px] text-left font-semibold">
                    {element.name}
                  </th>
                </tr>
              );
            })}
            <tr>
              <div className="flex h-10 flex-col justify-center border-r-[1px] border-r-slate-100 px-[16px] text-[14px] font-semibold">
                Course Layout
              </div>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex-1 overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-center text-[14px] font-semibold text-[#475467]">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((element, index) => {
                return (
                  <td
                    className={
                      (index !== 8
                        ? "border-r-[1px] border-r-slate-100 "
                        : "") + "px-[16px] py-[7px]"
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
            <tr className={"h-10 bg-[#D5DEE7]"}>
              {courseItem.courseLayout.map((_element, index) => {
                return (
                  <td
                    className={
                      (index !== courseItem.courseLayout.length - 1
                        ? "border-r-[1px] border-r-slate-100 "
                        : "") + "h-10 px-1 py-1"
                    }
                    key={index}
                  >
                    <div className="flex flex-row justify-center rounded-lg bg-white px-[8px] py-[4px]">
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
    </div>
  );
};

export default CourseTable;
