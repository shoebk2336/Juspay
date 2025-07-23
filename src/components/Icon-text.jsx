// import { Bug, Cast, CastIcon, User } from 'lucide-react'
import * as Icons from "lucide-react";

import React from "react";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";

const Icontext = ({ data }) => {
  const { icon, rounded, heading, subHead } = data;
  const Icon = Icons[icon];
  return (
    <div className=" flex items-center  gap-2 ">
      <div
        className={`flex justify-center items-center aspect-square p-1 bg-[#E3F5FF] rounded-${rounded}`}
      >
        <Icon color="black" size={16} />
      </div>
      {/* <div className="relative right-0 flex h-5 items-center  text-sm ml-4">
          <Separator orientation="vertical" className="relative right-9.5 top-7" />
        </div> */}
      <div className="grid text-left">
        <h1 className="text-[11px]">{heading}</h1>
        <p className="text-gray-400 text-[10px]">{subHead}</p>
      </div>
    </div>
  );
};

// export default Icontext

export const CustomDataBox = ({ data: Data ,className}) => {
  const { section, data } = Data[0];
  return (
    <div className={cn(`self-start  mt-0 flex flex-col  gap-4 `,className)}>
      <h1 className="text-left font-bold text-sm">{section}</h1>
      <div className=" grid gap-4">
        {data?.map((note, index) => (
          <Icontext key={index} data={note} />
        ))}
      </div>
    </div>
  );
};
