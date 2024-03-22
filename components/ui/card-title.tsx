import { cn } from "@/lib/utils";
import React from "react";

interface CardTitleProps {
  className?: String;
  cardLabel: String;
}

const CardTitle = ({ cardLabel, className }: CardTitleProps) => {
  return (
    <h2
      className={cn("text-[16px] text-primary-green font-semibold", className)}
    >
      {cardLabel}
    </h2>
  );
};

export default CardTitle;
