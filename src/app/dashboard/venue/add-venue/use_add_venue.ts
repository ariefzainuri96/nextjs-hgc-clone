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

type TCourseDetail = {
  content: string;
  values: number[] | string[];
};

export const defaultTCourseDetail: TCourseDetail[] = [
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
];

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
          console.log(`index ${index} => deletedIndex ${deletedIndex}`);
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
