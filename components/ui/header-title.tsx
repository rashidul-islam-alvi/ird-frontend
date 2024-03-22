import { cn } from "@/lib/utils";
import React from "react";

interface HeaderTitleProps {
  className?: String;
  headerLabel: String;
}

const HeaderTitle = ({ headerLabel, className }: HeaderTitleProps) => {
  return (
    <h2 className={cn("text-2xl font-semibold", className)}>{headerLabel}</h2>
  );
};

export default HeaderTitle;
