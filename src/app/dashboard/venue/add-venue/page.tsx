"use client";

import React from "react";
import AddVenueForm from "./(components)/AddVenueForm";
import useAddVenue from "./use_add_venue";

const AddVenuePage = () => {
  const { venue, setVenue } = useAddVenue();

  return (
    <div className="flex flex-col px-[16px]">
      <p className="mt-[24px] text-[18px] font-semibold text-[#101828]">
        Venue Detail
      </p>
      <AddVenueForm venue={venue} setVenue={setVenue} />
    </div>
  );
};

export default AddVenuePage;
