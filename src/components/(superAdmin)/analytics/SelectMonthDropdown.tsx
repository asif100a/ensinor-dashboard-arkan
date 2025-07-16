import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import React from "react";
import { FaAngleDown } from "react-icons/fa6";

interface SelectMonthDropdownProps {
    months: string[];
}

export default function SelectMonthDropdown({months}: SelectMonthDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="px-6 py-6 shadow-none border-none"
      >
        <Button variant="outline" className="text-base inline-flex">
          <span>This month</span> <FaAngleDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel className="text-base">
          Select a month
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          {months.map((month: string) => (
            <DropdownMenuItem key={month} className="text-base">
              {month}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
