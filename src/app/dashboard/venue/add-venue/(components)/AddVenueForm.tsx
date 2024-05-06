"use client";

import CustomArea from "@/components/CustomArea";
import CustomInput from "@/components/CustomInput";
import React from "react";
import { TVenue } from "../use_add_venue";

const AddVenueForm = ({
  venue,
  handleChange,
}: {
  venue?: TVenue;
  handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ): void;
}) => {
  return (
    <form className="flex flex-col">
      <div className="mt-[24px] flex flex-col gap-[24px] sm:flex-row">
        <CustomInput
          value={venue?.venueName}
          className="flex-1"
          label={"Venue Name"}
          name="venueName"
          onChange={handleChange}
        />
        <CustomInput
          className="flex-1"
          label={"Venue Phone Number"}
          name="venuePhoneNumber"
          onChange={handleChange}
        />
      </div>
      <div className="mt-[24px] flex flex-col gap-[24px] sm:flex-row">
        <CustomInput
          className="flex-1"
          label={"PIC Marketing"}
          name="picMarketing"
          onChange={handleChange}
        />
        <CustomInput
          className="flex-1"
          label={"PIC Phone Number"}
          name="picPhoneNumber"
          onChange={handleChange}
        />
      </div>
      <CustomInput
        className="mt-[24px] flex-1"
        label={"Venue Address"}
        name="venueAddress"
        onChange={handleChange}
      />
      <CustomArea
        className="mt-[24px] flex-1"
        label={"Description"}
        name="description"
        onChange={handleChange}
      />
    </form>
  );
};

export default AddVenueForm;
