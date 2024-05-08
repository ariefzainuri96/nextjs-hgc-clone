"use client";

import React from "react";
import { TCourse, TVenue } from "../use_add_venue";
import Button from "@/components/Button";
import CourseTableItem from "./CourseTableItem";
import { useSearchParams } from "next/navigation";

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
  const params = useSearchParams();

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
              courseDetail: [
                {
                  content: "Hole",
                  values: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                },
                {
                  content: "Black",
                  values: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                },
                {
                  content: "Blue",
                  values: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                },
                {
                  content: "White",
                  values: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                },
                {
                  content: "Red",
                  values: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                },
                {
                  content: "Par",
                  values: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                },
                {
                  content: "Index",
                  values: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                },
                {
                  content: "Course Layout",
                  values: ["", "", "", "", "", "", "", "", ""],
                },
              ],
            });
          }}
        />
      </div>
      {(venue?.courses ?? []).map((element, index) => {
        return (
          <CourseTableItem
            key={index}
            courseIndex={index}
            course={element}
            onDeleteClick={(e) => {
              e.preventDefault();

              window.history.pushState(
                null,
                "",
                `/dashboard/venue/add-venue?${params}&showdelete=true&id=${index}`,
              );
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
