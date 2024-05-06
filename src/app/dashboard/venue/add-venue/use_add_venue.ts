import { useState } from "react";

export type TVenue = {
  venueName: string;
  venuePhoneNumber: string;
  picMarketing: string;
  picPhoneNumber: string;
  venueAddress: string;
  description: string;
  courses: TCourse[];
};

type TCourse = {
  courseName: string;
  courseDetail: TCourseDetail[];
};

type TCourseDetail = {
  content: string;
  values: string[];
};

export default function useAddVenue() {
  const [venue, setVenue] = useState<TVenue>();

  return {
    venue,
    setVenue,
  };
}
