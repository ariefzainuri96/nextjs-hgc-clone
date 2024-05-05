export interface CourseItem {
  courseName: string;
  courseTable: CourseTableItem[];
  courseLayout: string[];
}

interface CourseTableItem {
  name: string;
  values: number[];
  color: string;
}

export const courses: CourseItem[] = [
  {
    courseName: "Forest Course",
    courseTable: [
      {
        name: "Black",
        color: "#0E1323",
        values: [388, 544, 497, 120, 220, 343, 231, 998, 738],
      },
      {
        name: "Blue",
        color: "#002C52",
        values: [388, 544, 497, 120, 220, 343, 231, 998, 738],
      },
      {
        name: "White",
        color: "#FFF",
        values: [388, 544, 497, 120, 220, 343, 231, 998, 738],
      },
      {
        name: "Red",
        color: "#F22B36",
        values: [388, 544, 497, 120, 220, 343, 231, 998, 738],
      },
      {
        name: "Par",
        color: "#EFA906",
        values: [388, 544, 497, 120, 220, 343, 231, 998, 738],
      },
      {
        name: "Index",
        color: "#FFF",
        values: [388, 544, 497, 120, 220, 343, 231, 998, 738],
      },
    ],
    courseLayout: ["", "asd", "", "", "sss", "asd", "", "222", ""],
  },
  {
    courseName: "Mountain Course",
    courseTable: [
      {
        name: "Black",
        color: "#0E1323",
        values: [388, 544, 497, 120, 220, 343, 231, 998, 738],
      },
      {
        name: "Blue",
        color: "#002C52",
        values: [388, 544, 497, 120, 220, 343, 231, 998, 738],
      },
      {
        name: "White",
        color: "#FFF",
        values: [388, 544, 497, 120, 220, 343, 231, 998, 738],
      },
      {
        name: "Red",
        color: "#F22B36",
        values: [388, 544, 497, 120, 220, 343, 231, 998, 738],
      },
      {
        name: "Par",
        color: "#EFA906",
        values: [388, 544, 497, 120, 220, 343, 231, 998, 738],
      },
      {
        name: "Index",
        color: "#FFF",
        values: [388, 544, 497, 120, 220, 343, 231, 998, 738],
      },
    ],
    courseLayout: ["", "asd", "", "", "sss", "asd", "", "222", ""],
  },
];
