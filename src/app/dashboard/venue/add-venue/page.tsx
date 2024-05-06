"use client";

import React from "react";
import AddVenueForm from "./(components)/AddVenueForm";
import useAddVenue from "./use_add_venue";
import AddVenueCourse from "./(components)/AddVenueCourse";
import Button from "@/components/Button";

const AddVenuePage = () => {
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
      <Button
        content={"click me"}
        onButtonClick={(e) => {
          e.preventDefault();

          console.log(venue);
        }}
      />
    </div>
  );
};

export default AddVenuePage;
