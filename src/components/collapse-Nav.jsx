import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import * as Icons from "lucide-react";

const CollapseNav = ({ data }) => {
  const { heading, icon } = data;
  const Icon = Icons[icon];
  return (
    <div>
      <Accordion type="single" collapsible className=" p-0">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left gap-1 p-0 hover:cursor-pointer hover:no-underline ">
            <div className=" w-full flex gap-1">
              <Icon size={16} />

              <h1 className="text-[12px]">{heading}</h1>
            </div>
          </AccordionTrigger>
          <AccordionContent className="border-0">
            <ul className="text-[12px] ml-10 mt-4 grid gap-4 hover:cursor-pointer space-y-1 text-left">
              <li>Overview</li>
              <li>Projects</li>
              <li>Campaigns</li>
              <li>Documents</li>
              <li>Followers</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CollapseNav;
