"use client";

import React, { useRef } from "react";
import { TCourse } from "../use_add_venue";
import { twMerge } from "tailwind-merge";
import { IcEye, IcTrash, IcUpload } from "@/components/Icons";
import CustomInput from "@/components/CustomInput";
import { useSearchParams } from "next/navigation";

const CourseTableItem = ({
  course,
  onDeleteClick,
  onUpdateCouse,
  courseIndex,
}: {
  course: TCourse;
  onDeleteClick: (e: React.MouseEvent) => void;
  onUpdateCouse: (course: TCourse) => void;
  courseIndex: number;
}) => {
  const params = useSearchParams();
  const inputCourseLayoutRef = useRef<HTMLInputElement>(null);
  const courseLayoutRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

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
            course.courseName = e.target.value;

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
                  return (
                    <tr key={element.content} className={"h-10 bg-[#D5DEE7]"}>
                      {element.values.map((_element, valueIndex) => {
                        return (
                          <td
                            className={
                              (index !== element.values.length - 1
                                ? "border-r-[1px] border-r-slate-100 "
                                : "") + "h-10 px-1 py-1"
                            }
                            key={index}
                          >
                            <div className="flex flex-row justify-center">
                              <input
                                onChange={(e) => {
                                  console.log(e.target.files);

                                  if (e.target.files && e.target.files[0]) {
                                    const i = e.target.files[0];

                                    console.log(i);

                                    course.courseDetail[index].values[
                                      valueIndex
                                    ] = i;
                                    onUpdateCouse(course);
                                  }
                                }}
                                hidden={true}
                                type="file"
                                ref={courseLayoutRefs[valueIndex]}
                                accept="image/*"
                              />
                              <button
                                className="flex flex-1 flex-row justify-center rounded-lg bg-white px-[8px] py-[4px]"
                                onClick={(e) => {
                                  e.preventDefault();

                                  if (_element instanceof File) {
                                    window.history.pushState(
                                      null,
                                      "",
                                      `/dashboard/venue/add-venue?${params}&showimage=true&image=${URL.createObjectURL(_element)}&hole=${valueIndex + 1}`,
                                    );
                                  } else {
                                    courseLayoutRefs[
                                      valueIndex
                                    ]?.current?.click();
                                  }
                                }}
                              >
                                {_element instanceof File ? (
                                  <IcEye width="24" height="24" />
                                ) : (
                                  <IcUpload width="24" height="24" />
                                )}
                              </button>
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
                    key={`${element.content}-${index}-${courseIndex}`}
                    className={twMerge(
                      bgColor(element.content),
                      "text-center text-[14px] font-semibold",
                    )}
                  >
                    {element.values.map((_element, valueIndex) => {
                      return (
                        <td
                          className={
                            (index !== element.values.length - 1
                              ? "border-r-[1px] border-r-slate-100 "
                              : "") + "p-[4px]"
                          }
                          key={`${element.content}-${valueIndex}-row`}
                        >
                          <input
                            key={`${element.content}-${valueIndex}-input`}
                            value={
                              typeof _element !== "string" ||
                              typeof _element !== "number"
                                ? `${_element}`
                                : ""
                            }
                            className="input-outlined h-[28px] min-w-[88px] max-w-[88px] bg-white text-center"
                            onChange={(e) => {
                              course.courseDetail[index].values[valueIndex] =
                                e.target.value;

                              onUpdateCouse(course);
                            }}
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
