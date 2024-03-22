"use client";

import React from "react";
import ImageComponent from "./ui/custom-image-component";
import CardTitle from "./ui/card-title";
import CardSubtitle from "./ui/card-subtitle";
import { CategoryCardProps } from "@/interfaces";

const CategoryCard: React.FC<CategoryCardProps> = ({ category, isActive }) => {
  return (
    <div
      className={`cursor-pointer  p-[10px] rounded-[10px] ${
        isActive ? "bg-[#E8F0F5]" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center  gap-4">
          <div className="w-[60px] h-[60px] flex justify-center items-center bg-[#CFE0E5] rounded-[10px]">
            <ImageComponent
              src="/cat.png"
              alt="category_icon"
              className="w-[40px] h-[40px]"
            />
          </div>

          <div>
            <CardTitle cardLabel={category.cat_name_en} />
            <CardSubtitle label={`Subcategory: ${category.no_of_subcat}`} />
          </div>
        </div>

        <div className="flex flex-col  items-center">
          <p>{category.no_of_dua}</p>
          <CardSubtitle label="Duas" />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
