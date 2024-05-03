"use client";

import { IcAdd, IcSearch } from "./Icons";
import { twMerge } from "tailwind-merge";
import { useBreakpoint } from "@/lib/hooks/use_breakpoints";

type ButtonProps = {
  content: string;
  iconName?: "add" | "search";
  className?: string;
  implementBreakPoints?: boolean;
  variant?: "outlined" | "full";
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
}: ButtonProps) => {
  const { isAboveSm } = useBreakpoint("sm");

  return (
    <button
      className={twMerge(
        "flex flex-row items-center gap-2 rounded-lg px-[16px] py-[6px] text-white",
        variant === "full" ? "bg-[#E24955]" : "border-[1px] border-[#D0D5DD]",
        className,
      )}
    >
      {iconName && <IconFromName iconName={iconName} />}
      {implementBreakPoints ? (isAboveSm ? content : "") : content}
    </button>
  );
};

export default Button;
