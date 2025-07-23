import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { setTheme } = useTheme();
  // custom function
  const [theme,settheme]=useState('dark')

  useEffect(()=>{
    setTheme(theme)
  },[theme])

  const ThemeChange=()=>{
    if(theme==="dark"){settheme("light")}
    else settheme("dark")
  }

  return (
    <DropdownMenu>
      {/* <DropdownMenuTrigger asChild> */}
        <Sun className="hover:cursor-pointer hover:p-0.5" onClick={ThemeChange} size={20} />

        {/* </Button> */}
      {/* </DropdownMenuTrigger> */}
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
