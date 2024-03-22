import React from "react";
import ImageComponent from "./ui/custom-image-component";
import CardSubtitle from "./ui/card-subtitle";
import { DuasProps } from "@/interfaces";
import Link from "next/link";

const SubCategoryDuaCard = ({ subCatDua }: { subCatDua: DuasProps }) => {
  return (
    <div className="flex gap-2 items-center">
      <div>
        <ImageComponent
          src="/duaarrow.svg"
          alt="subcategory_dua_duaarrow_icon"
          className="w-[15px] h-[42px]"
        />
      </div>
      <div>
        <Link href={`#${subCatDua.dua_id.toString()}`}>
          <CardSubtitle
            label={subCatDua.dua_name_en}
            className="text-[14px] text-black"
          />
        </Link>
      </div>
    </div>
  );
};

export default SubCategoryDuaCard;
