"use client";

import React, { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { convertToSlug } from "@/lib/slug-converter";
import Link from "next/link";
import SubCategory from "./sub-category";
import CategoryCard from "./category-card";
import { CategoryCardsWrapperProps } from "@/interfaces";

const CategoryCardsWrapper = ({ categories }: CategoryCardsWrapperProps) => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const handleCategoryClick = (categoryId: number) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  return (
    <ScrollArea className="px-3 pb-[15px] h-[70vh]">
      {categories?.map((category) => (
        <div key={category.cat_icon}>
          <Link
            href={{
              pathname: `/${convertToSlug(category.cat_name_en)}`,
              query: { cat: category.cat_id },
            }}
          >
            <div onClick={() => handleCategoryClick(category.cat_id)}>
              <CategoryCard
                category={category}
                isActive={activeCategory === category.cat_id}
              />
            </div>
          </Link>
          {activeCategory === category.cat_id && (
            <SubCategory catId={category.cat_id} />
          )}
        </div>
      ))}
    </ScrollArea>
  );
};

export default CategoryCardsWrapper;
