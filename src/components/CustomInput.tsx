import React from "react";

interface CustomInputProps {
  label: string;
  placeholder: string;
  name: string;
  type:
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
  type,
}: CustomInputProps) => {
  return (
    <div className={className}>
      <p className="text-sm font-medium text-[#344054]">{label}</p>
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        className="input input-bordered mt-[6px] w-full"
      />
    </div>
  );
};

export default CustomInput;
