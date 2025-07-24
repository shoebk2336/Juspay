import Header from "@/components/Header";
import { CustomDataBox } from "@/components/Icon-text";
import LeftsideBar from "@/components/Left-sideBar";
import Notification from "../../Mock-Data/Right-Notification.json";
import Activities from "../../Mock-Data/Right-Activities.json";
import Contacts from "../../Mock-Data/Right-Contacts.json";

import React from "react";
import { Outlet } from "react-router";
import CollapseNav from "@/components/collapse-Nav";
import { useParams } from "react-router";

const Applayout = () => {
  const param = useParams();
  return (
    <main className="flex  mx-auto ">
      <LeftsideBar className="w-53 border-r" />

      <div className="flex flex-col flex-1">
        <Header className="border-b" />

        <div className="flex-1  p-4">
          <Outlet />
        </div>
      </div>
      {/* right sidebar */}
      <div
        className="hidden sm:flex flex-col border-l  min-w-70 p-4  gap-12"
      >
        <CustomDataBox className="" data={Notification} />
        <CustomDataBox className="" data={Activities} />
        <CustomDataBox className="" data={Contacts} />
      </div>
    </main>
  );
};

export default Applayout;
