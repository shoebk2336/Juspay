import { CommandIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";

const SearchBar = () => {
  return (
    <div className=" hidden sm:flex  w-40 h-7 border border-input rounded-sm bg-input/45 flex items-center px-2">
      <SearchIcon size={18} color="gray" />
      <Input
        type="search"
        placeholder="Search"
        className="focus-visible:ring-0 focus-visible:border-none focus-visible:outline-none rounded-lg border-0 w-[100%] h-7 relative left-[-8px]"
      />
      <CommandIcon size={18} color="gray" />
      <p className="text-gray-500 text-[13px]">/</p>
    </div>
  );
};

export default SearchBar;
