import { useState } from "react";

export type TVenue = {
  venueName?: string;
  venuePhoneNumber?: string;
  picMarketing?: string;
  picPhoneNumber?: string;
  venueAddress?: string;
  description?: string;
  courses?: TCourse[];
};

export type TCourse = {
  courseName: string;
  courseDetail: TCourseDetail[];
};

export type TCourseDetail = {
  content: string;
  values: number[] | string[] | File[];
};

// export type TValues = {
//   ref?: HTMLInputElement;
//   value: number | string | File;
// };

export default function useAddVenue() {
  const [venue, setVenue] = useState<TVenue>();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setVenue((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function addCourse(newCourse: TCourse) {
    setVenue((prev) => {
      return { ...prev, courses: [...(prev?.courses ?? []), newCourse] };
    });
  }

  function updateCourse(updatedIndex: number, newCourse: TCourse) {
    setVenue((prev) => {
      return {
        ...prev,
        courses: (prev?.courses ?? []).map((element, index) => {
          if (index === updatedIndex) {
            return newCourse;
          }

          return element;
        }),
      };
    });
  }

  function deleteCourse(deletedIndex: number) {
    setVenue((prev) => {
      return {
        ...prev,
        courses: (prev?.courses ?? []).filter((_, index) => {
          return index !== deletedIndex;
        }),
      };
    });
  }

  return {
    venue,
    addCourse,
    handleChange,
    deleteCourse,
    updateCourse,
  };
}
