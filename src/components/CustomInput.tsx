"use client";

import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface CustomInputProps {
  inputProp?: ComponentProps<"input">;
  label: string;
  placeholder?: string;
  name?: string;
  value?: string;
  enable?: boolean;
  type?:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  className?: string;
}

const CustomInput = ({
  className,
  label,
  placeholder,
  name,
  value,
  enable = true,
  type = "text",
  inputProp,
}: CustomInputProps) => {
  return (
    <div className={className}>
      <p className="text-sm font-medium text-[#344054]">{label}</p>
      <input
        defaultValue={value}
        placeholder={placeholder}
        name={name}
        type={type}
        className={twMerge(
          "input input-bordered mt-[6px] w-full text-[16px]",
          enable ? "text-[#101828]" : "text-[#667085]",
        )}
        {...inputProp}
      />
    </div>
  );
};

export default CustomInput;
