import { cn } from "@/lib/utils";
import React from "react";

interface CardSubtitleProps {
  className?: String;
  label: String;
}

const CardSubtitle = ({ label, className }: CardSubtitleProps) => {
  return (
    <p className={cn("text-[14px] text-[#7E7E7E] ", className)}>{label}</p>
  );
};

export default CardSubtitle;
