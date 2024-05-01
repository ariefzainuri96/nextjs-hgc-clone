import React from "react";
import { IcSearch } from "./Icons";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  content: string;
  iconName: "add" | "search";
  className?: string;
};

const IconFromName = ({ iconName }: { iconName: string }) => {
  if (iconName == "search") {
    return <IcSearch stroke="#fff" width="16" height="16" />;
  }

  return <IcSearch />;
};

const Button = ({ content, iconName, className }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "flex flex-row items-center gap-2 rounded-[8px] bg-[#E24955] px-[16px] py-[6px] text-white",
        className,
      )}
    >
      <IconFromName iconName={iconName} /> {content}
    </button>
  );
};

export default Button;
