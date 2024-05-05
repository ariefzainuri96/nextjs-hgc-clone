"use client";

import CustomInput from "@/components/CustomInput";
import React from "react";

const CourseDetail = () => {
  return (
    <div>
      <p className="mt-[24px] text-[18px] font-semibold text-[#101828]">
        Course Detail
      </p>
      <CustomInput
        className="mt-[24px] flex-1"
        label={"Course Name"}
        defaultValue={"Forest Course"}
        enable={false}
        onKeyDown={(e) => {
          e.preventDefault();
        }}
      />
    </div>
  );
};

export default CourseDetail;
