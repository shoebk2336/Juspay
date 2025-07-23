"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon } from "lucide-react";

export function AddOrderDrawer() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className=" border-0 shadow-none bg-transparent  dark:bg-transparent hover:cursor-pointer"
          >
            <PlusIcon className="hover:cursor-pointer" />
          </Button>
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>Add order details</DialogTitle>
            {/* <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription> */}
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer className="" open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline"
        className="border-0  dark:bg-transparent hover:cursor-pointer"
        >
        <PlusIcon className="hover:cursor-pointer" />

        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add order details</DrawerTitle>
          {/* <DrawerDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DrawerDescription> */}
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }) {
  return (
    <form className={cn("grid items-start  gap-6", className)}>
      <div className="flex gap-4 justify-between">
        <div className="w-30 grid gap-3">
          <Label htmlFor="orderID">Order ID</Label>
          <Input type="orderID" id="orderID" placeholder="#CMP981" />
        </div>
        <div className="w-full grid gap-3">
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="Username" />
        </div>
      </div>
      <div className="w-full grid gap-3">
        <Label htmlFor="project">Project</Label>
        <Input id="project" placeholder="Project" />
      </div>
      <div className="w-full grid gap-3">
        <Label htmlFor="address">Address</Label>
        <Input id="address" placeholder="Address" />
      </div>
      <div className="flex gap-2">
        <div className="w-1/2 grid gap-3">
          <Label htmlFor="date">Date</Label>
          <Input id="date" placeholder="Date" />
        </div>
        <div className="w-1/2 grid gap-3">
          <Label htmlFor="address">Address</Label>
          <Input id="address" placeholder="Address" />
        </div>
      </div>
      <Button type="Add Order">Save changes</Button>
    </form>
  );
}
