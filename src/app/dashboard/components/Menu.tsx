"use client";

import {
  IcArrowUp,
  IcBlogging,
  IcLogout,
  IcMasterData,
  IcTournament,
} from "@/components/Icons";
import { menus } from "@/source/dashboard_source";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface MenuProps {
  className?: string;
  onMenuClick?: () => void;
}

const Icon = ({ image }: { image: string }) => {
  if (image == "master-data") {
    return <IcMasterData />;
  }

  if (image == "tournament") {
    return <IcTournament />;
  }

  return <IcBlogging />;
};

const Menu = ({ className, onMenuClick }: MenuProps) => {
  const pathName = usePathname();
  const searchParam = useSearchParams();
  const parent = searchParam.get("parents");
  const router = useRouter();

  return (
    <div
      className={twMerge(
        "hidden min-w-[312px] max-w-[312px] flex-col bg-white lg:flex",
        className,
      )}
    >
      {/* image */}
      <div className="mb-[8px] flex w-full flex-row justify-center">
        <Image
          src={"/assets/img/img_logo.png"}
          alt={"img_logo"}
          width={212}
          height={159}
          className="object-fit"
        />
      </div>

      {/* menus */}
      <div className="flex-1 overflow-y-auto">
        {menus.map((element, index) => {
          const selected = parent?.includes(element.key ?? "");

          return (
            <div key={element.content} className="flex flex-col">
              <div
                onClick={(e) => {
                  e.preventDefault();

                  const parents = parent?.includes(element.key ?? "")
                    ? parent
                        .split(",")
                        .filter((_element) => _element !== element.key)
                        .join(",")
                    : `${parent === "" ? "" : `${parent},`}${element.key}`;

                  window.history.pushState(null, "", `?parents=${parents}`);
                }}
                className={twMerge(
                  "mx-[16px] mt-[16px] flex cursor-pointer flex-row items-center rounded-md px-[12px] py-[8px] hover:bg-[#FFEBEB]",
                  selected && "bg-[#FFEBEB]",
                )}
              >
                <Icon image={element.image ?? ""} />
                <p className="mx-[12px] line-clamp-1 min-w-0 flex-1 text-wrap text-[16px] font-semibold">
                  {element.content}
                </p>
                <div className={selected ? "" : "rotate-180"}>
                  <IcArrowUp stroke={selected ? "#FF474E" : "#000"} />
                </div>
              </div>
              {selected &&
                (element.menus ?? []).map((_element, _index) => {
                  const menuPath = (_element.href ?? "").split("/").pop();
                  const selected = pathName.split("/").pop() === menuPath;

                  const parents = parent?.includes(element.key ?? "")
                    ? parent
                    : `${parent},${element.key}`;

                  return (
                    <div
                      key={_element.content}
                      onClick={(e) => {
                        e.preventDefault();

                        router.push(
                          `${_element.href ?? ""}?parents=${parents}`,
                        );

                        if (onMenuClick) onMenuClick();
                      }}
                      className={twMerge(
                        "mx-[16px] mt-[8px] flex cursor-pointer flex-row items-center rounded-md py-[8px] pl-[60px] pr-[12px] hover:bg-[#FFEBEB]",
                        selected && "bg-[#FFEBEB]",
                      )}
                    >
                      <p className="line-clamp-1 min-w-0 flex-1 text-wrap text-[16px] font-semibold">
                        {_element.content}
                      </p>
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>

      <div className="h-[1px] w-full bg-slate-100" />
      <div className="flex flex-row gap-3 p-[16px]">
        <div className="size-10 rounded-full bg-slate-200" />
        <div className="flex flex-1 flex-col items-start">
          <p className="line-clamp-1 text-wrap text-sm font-semibold">
            Michael
          </p>
          <p className="line-clamp-1 text-wrap text-sm text-[#E24955]">
            michael@telkomsel.com
          </p>
        </div>
        <IcLogout />
      </div>
    </div>
  );
};

export default Menu;
