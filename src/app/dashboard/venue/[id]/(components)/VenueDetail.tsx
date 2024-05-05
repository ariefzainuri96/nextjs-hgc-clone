"use client";

import CustomArea from "@/components/CustomArea";
import CustomInput from "@/components/CustomInput";
import React from "react";

const VenueDetail = () => {
  return (
    <div className="flex flex-col">
      <p className="mt-[24px] text-[18px] font-semibold text-[#101828]">
        Venue Detail
      </p>
      <div className="mt-[24px] flex flex-col gap-[24px] sm:flex-row">
        <CustomInput
          className="flex-1"
          label={"Venue Name"}
          defaultValue={"Sedayu Indah Golf"}
          enable={false}
          onKeyDown={(e) => {
            e.preventDefault();
          }}
        />
        <CustomInput
          className="flex-1"
          label={"Venue Phone Number"}
          defaultValue={"+6221 666-666"}
          enable={false}
          onKeyDown={(e) => {
            e.preventDefault();
          }}
        />
      </div>
      <div className="mt-[24px] flex flex-col gap-[24px] sm:flex-row">
        <CustomInput
          className="flex-1"
          label={"PIC Marketing"}
          defaultValue={"Reza Anwar"}
          enable={false}
          onKeyDown={(e) => {
            e.preventDefault();
          }}
        />
        <CustomInput
          className="flex-1"
          label={"PIC Phone Number"}
          defaultValue={"+6221 666-666"}
          enable={false}
          onKeyDown={(e) => {
            e.preventDefault();
          }}
        />
      </div>
      <CustomInput
        className="mt-[24px] flex-1"
        label={"Venue Address"}
        defaultValue={
          "Golf Island, Jl. Marina Indah Jl. Pantai Indah Kapuk No.1, DKI Jakarta 14460"
        }
        enable={false}
        onKeyDown={(e) => {
          e.preventDefault();
        }}
      />
      <CustomArea
        className="mt-[24px] flex-1"
        label={"Description"}
        defaultValue={
          "Lorem ipsum dolor sit amet consectetur. Massa vel egestas orci arcu enim. Praesent eget a aliquet ut donec viverra proin dui. Quam arcu cursus nullam tellus nisi tellus nisl dolor. Odio sit viverra sem pellentesque arcu velit. Sed vitae et nisl mi sed gravida quis. Fringilla dignissim pharetra et purus sagittis tellus aenean nulla vestibulum. Libero tortor elit augue enim eu cursus. Accumsan viverra amet ornare ipsum rhoncus sit. Aliquet cras at neque at pellentesque porttitor orci mauris mauris. Pellentesque consectetur et at sed sed a ut hac. Dictumst magna egestas senectus pulvinar."
        }
        enable={false}
        onKeyDown={(e) => {
          e.preventDefault();
        }}
      />
    </div>
  );
};

export default VenueDetail;
