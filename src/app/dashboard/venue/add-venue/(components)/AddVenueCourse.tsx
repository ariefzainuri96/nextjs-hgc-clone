"use client";

import React from "react";
import { TCourse, TVenue, defaultTCourseDetail } from "../use_add_venue";
import Button from "@/components/Button";
import CourseTableItem from "./CourseTableItem";

const AddVenueCourse = ({
  venue,
  addCourse,
  deleteCourse,
  updateCourse,
}: {
  venue?: TVenue;
  addCourse: (newCourse: TCourse) => void;
  deleteCourse: (index: number) => void;
  updateCourse: (index: number, course: TCourse) => void;
}) => {
  return (
    <div className="mt-[32px] flex flex-col">
      <div className="flex flex-row">
        <p className="inter-600-18 flex-1">Course Detail</p>
        <Button
          content={"Add Course"}
          iconName="add"
          onButtonClick={(e) => {
            e.preventDefault();

            addCourse({
              courseName: "",
              courseDetail: defaultTCourseDetail,
            });
          }}
        />
      </div>
      {(venue?.courses ?? []).map((element, index) => {
        return (
          <CourseTableItem
            key={index}
            course={element}
            onDeleteClick={(e) => {
              e.preventDefault();

              deleteCourse(index);
            }}
            onUpdateCouse={(course) => {
              updateCourse(index, course);
            }}
          />
        );
      })}
      <div className="h-[16px]" />
    </div>
  );
};

export default AddVenueCourse;
