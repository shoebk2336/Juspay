import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const CustomAvatar = ({ data: avatar }) => {
  return (
    <Avatar>
      <AvatarImage src={avatar} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default CustomAvatar;
