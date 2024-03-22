import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface ImageComponentProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageComponent({
  src,
  alt,
  className,
}: ImageComponentProps) {
  return (
    <div
      className={cn("w-10 h-10 relative rounded-md cursor-pointer", className)}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="absolute"
      />
    </div>
  );
}
