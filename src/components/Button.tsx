"use client";

import { IcAdd, IcSearch } from "./Icons";
import { twMerge } from "tailwind-merge";
import { useIsBreakpointActive } from "@/lib/hooks/use_is_breakpoints_active";
import React from "react";

type ButtonProps = {
  content: string;
  iconName?: "add" | "search";
  className?: string;
  implementBreakPoints?: boolean;
  variant?: "outlined" | "full";
  onButtonClick?: (e: React.MouseEvent) => void;
};

const IconFromName = ({ iconName }: { iconName: string }) => {
  if (iconName == "search") {
    return <IcSearch stroke="#fff" width="20" height="20" />;
  } else if (iconName == "add") {
    return <IcAdd stroke="#fff" width="20" height="20" />;
  }

  return <IcSearch />;
};

const Button = ({
  content,
  iconName,
  className,
  implementBreakPoints = false,
  variant = "full",
  onButtonClick,
}: ButtonProps) => {
  // const isBreakPointActive = useIsBreakpointActive("sm");

  return (
    <button
      onClick={onButtonClick}
      className={twMerge(
        "flex flex-row items-center gap-2 rounded-lg px-[16px] py-[10px] text-white",
        variant === "full" ? "bg-[#E24955]" : "border-[1px] border-[#D0D5DD]",
        className,
      )}
    >
      {iconName && <IconFromName iconName={iconName} />}
      {content}
    </button>
  );
};

export default Button;
