"use client";

import CustomInput from "@/components/CustomInput";
import React from "react";
import CourseTable from "./CourseTable";
import { courses } from "@/source/detail_venue_source";

const CourseDetail = () => {
  return (
    <>
      <p className="mt-[24px] text-[18px] font-semibold text-[#101828]">
        Course Detail
      </p>
      {courses.map((element) => {
        return (
          <div className="flex flex-col" key={element.courseName}>
            <CustomInput
              className="mt-[24px] flex-1"
              label={"Course Name"}
              defaultValue={"Forest Course"}
              enable={false}
              onKeyDown={(e) => {
                e.preventDefault();
              }}
            />
            <CourseTable courseItem={element} />
          </div>
        );
      })}
      <div className="h-[16px]" />
    </>
  );
};

export default CourseDetail;
