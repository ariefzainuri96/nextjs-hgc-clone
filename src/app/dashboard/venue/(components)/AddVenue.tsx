"use client";

import Button from "@/components/Button";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const AddVenue = () => {
  const router = useRouter();
  const params = useSearchParams();

  return (
    <Button
      implementBreakPoints={true}
      content={"Add Venue"}
      iconName={"add"}
      variant={"full"}
      onButtonClick={(e) => {
        e.preventDefault();

        router.push(`/dashboard/venue/add-venue?${params}`);
      }}
    />
  );
};

export default AddVenue;
