"use client";

import CustomArea from "@/components/CustomArea";
import CustomInput from "@/components/CustomInput";
import React from "react";
import { TVenue } from "../use_add_venue";

const AddVenueForm = ({
  venue,
  setVenue,
}: {
  venue?: TVenue;
  setVenue: React.Dispatch<React.SetStateAction<TVenue | undefined>>;
}) => {
  return (
    <form className="flex flex-col">
      <div className="mt-[24px] flex flex-col gap-[24px] sm:flex-row">
        <CustomInput
          className="flex-1"
          label={"Venue Name"}
          onChange={(e) => {
            setVenue(venue);
          }}
        />
        <CustomInput className="flex-1" label={"Venue Phone Number"} />
      </div>
      <div className="mt-[24px] flex flex-col gap-[24px] sm:flex-row">
        <CustomInput className="flex-1" label={"PIC Marketing"} />
        <CustomInput className="flex-1" label={"PIC Phone Number"} />
      </div>
      <CustomInput className="mt-[24px] flex-1" label={"Venue Address"} />
      <CustomArea
        className="mt-[24px] flex-1"
        label={"Description"}
        defaultValue={
          "Lorem ipsum dolor sit amet consectetur. Massa vel egestas orci arcu enim. Praesent eget a aliquet ut donec viverra proin dui. Quam arcu cursus nullam tellus nisi tellus nisl dolor. Odio sit viverra sem pellentesque arcu velit. Sed vitae et nisl mi sed gravida quis. Fringilla dignissim pharetra et purus sagittis tellus aenean nulla vestibulum. Libero tortor elit augue enim eu cursus. Accumsan viverra amet ornare ipsum rhoncus sit. Aliquet cras at neque at pellentesque porttitor orci mauris mauris. Pellentesque consectetur et at sed sed a ut hac. Dictumst magna egestas senectus pulvinar."
        }
      />
    </form>
  );
};

export default AddVenueForm;
