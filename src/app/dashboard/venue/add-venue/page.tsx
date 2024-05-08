"use client";

import React from "react";
import AddVenueForm from "./(components)/AddVenueForm";
import useAddVenue from "./use_add_venue";
import AddVenueCourse from "./(components)/AddVenueCourse";
import DeleteDataDialog from "@/components/DeleteDataDialog";
import { useRouter } from "next/navigation";
import CourseImageDialog from "./(components)/CourseImageDialog";

const AddVenuePage = () => {
  const router = useRouter();
  const { venue, addCourse, updateCourse, deleteCourse, handleChange } =
    useAddVenue();

  return (
    <div className="flex flex-col px-[16px]">
      <p className="mt-[24px] text-[18px] font-semibold text-[#101828]">
        Venue Detail
      </p>
      <AddVenueForm venue={venue} handleChange={handleChange} />
      <AddVenueCourse
        venue={venue}
        addCourse={addCourse}
        deleteCourse={(index) => deleteCourse(index)}
        updateCourse={(index, course) => updateCourse(index, course)}
      />
      <div className="mb-4 flex flex-row justify-end gap-3">
        <button className="btn-outlined px-[54px]">Cancel</button>
        <button
          onClick={(e) => {
            e.preventDefault();

            console.log(venue);
          }}
          className="btn-filled-primary px-[54px]"
        >
          Create
        </button>
      </div>
      <DeleteDataDialog
        formAction={(_, formData) => {
          deleteCourse(Number(formData.get("id")));
          router.back();
        }}
      />
      <CourseImageDialog
        formAction={function (prevState: any, formData: FormData): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};

export default AddVenuePage;
