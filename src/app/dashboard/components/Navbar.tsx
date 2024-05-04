"use client";

import { IcMenu } from "@/components/Icons";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import Menu from "./Menu";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={twMerge("navbar z-10 mx-2 bg-white lg:hidden", className)}>
      <div className="drawer">
        <input
          checked={checked}
          onChange={(e) => {}}
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <label
          onClick={(e) => {
            e.preventDefault();

            setChecked(true);
          }}
          htmlFor="my-drawer"
          className="drawer-button cursor-pointer"
        >
          <IcMenu />
        </label>
        <div className="drawer-side">
          <label
            onClick={(e) => {
              e.preventDefault();

              setChecked(false);
            }}
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col">
            <Menu
              className="flex flex-1"
              onMenuClick={() => setChecked(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
