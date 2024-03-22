import React from "react";
import CardTitle from "./ui/card-title";
import { SubCategoryProps } from "@/interfaces";

const SubCategoryCard = ({
  subCategory,
  isActive,
}: {
  subCategory: SubCategoryProps;
  isActive: boolean;
}) => {
  return (
    <div className="my-4 flex items-center cursor-pointer">
      <div className="w-2 h-2 rounded-full bg-primary-green -translate-x-[21px]" />
      <CardTitle
        cardLabel={subCategory.subcat_name_en}
        className={`${
          isActive ? "text-primary-green" : "text-black"
        } leading-[25px] font-medium`}
      />
    </div>
  );
};

export default SubCategoryCard;
