import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectInputProps {
  className?: string;
  children: React.ReactNode;
  placeholder?: string;
}

export function SelectInput({ className, children, placeholder = "Select an option" }: SelectInputProps) {
  return (
    <Select>
      <SelectTrigger className={`w-[180px] bg-white text-black ${className}`}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>{children}</SelectGroup>
      </SelectContent>
    </Select>
  );
}
