"use client";

import React from "react";
import { TCourse } from "../use_add_venue";
import { twMerge } from "tailwind-merge";
import { IcEye, IcTrash, IcUpload } from "@/components/Icons";
import CustomInput from "@/components/CustomInput";

const CourseTableItem = ({
  course,
  onDeleteClick,
  onUpdateCouse,
}: {
  course: TCourse;
  onDeleteClick: (e: React.MouseEvent) => void;
  onUpdateCouse: (course: TCourse) => void;
}) => {
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
    <div className="mt-[32px] flex flex-col">
      <div className="flex flex-row items-center gap-4">
        <div className="cursor-pointer" onClick={onDeleteClick}>
          <IcTrash />
        </div>
        <CustomInput
          value={course.courseName}
          className="flex-1"
          label={"Course Name"}
          placeholder="Insert course name..."
          onChange={(e) => {
            course.courseName = e.target.value.trim();

            onUpdateCouse(course);
          }}
        />
      </div>
      <div className="mt-[12px] flex flex-row overflow-hidden rounded-xl border-[1px] border-[#EAECF0]">
        <div className="overflow-hidden">
          <table className="table">
            <tbody>
              {course.courseDetail.map((element) => {
                return (
                  <tr
                    className={twMerge(
                      bgColor(element.content),
                      textColor(element.content),
                      "text-center text-[14px] font-semibold",
                    )}
                    key={element.content}
                  >
                    <th className="border-r-[1px] border-r-slate-100 px-[16px] py-[4px] text-left font-semibold">
                      <div className="flex h-[28px] flex-col justify-center">
                        {element.content}
                      </div>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex-1 overflow-x-auto">
          <table className="table">
            <tbody>
              {course.courseDetail.map((element, index) => {
                if (index == course.courseDetail.length - 1) {
                  // this is for course layout
                  return (
                    <tr key={element.content} className={"h-10 bg-[#D5DEE7]"}>
                      {element.values.map((_element, index) => {
                        return (
                          <td
                            className={
                              (index !== element.values.length - 1
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
                  );
                }

                // this is for standart input
                return (
                  <tr
                    key={element.content}
                    className={twMerge(
                      bgColor(element.content),
                      "text-center text-[14px] font-semibold",
                    )}
                  >
                    {element.values.map((_element, index) => {
                      return (
                        <td
                          className={
                            (index !== element.values.length - 1
                              ? "border-r-[1px] border-r-slate-100 "
                              : "") + "p-[4px]"
                          }
                          key={index}
                        >
                          <input
                            className="input-outlined h-[28px] min-w-[88px] max-w-[88px] bg-white text-center"
                            defaultValue={_element}
                          />
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CourseTableItem;
