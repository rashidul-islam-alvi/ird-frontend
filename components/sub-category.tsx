"use client";

import React, { useEffect, useState } from "react";
import SubCategoryCard from "./sub-category-card";
import SubCategoryDua from "./sub-category-dua";
import { SubCategoryProps } from "@/interfaces";

const SubCategory = ({ catId }: { catId: number }) => {
  const [subCategories, setSubCategories] = useState<SubCategoryProps[]>([]);
  const [activeSubCategory, setActiveSubCategory] = useState<number | null>(
    null
  );

  const handleSubCategoryClick = (categoryId: number) => {
    setActiveSubCategory(activeSubCategory === categoryId ? null : categoryId);
  };

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/sub-categories?catId=${catId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch sub-categories");
        }
        const subCategoriesData = await response.json();
        setSubCategories(subCategoriesData.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSubCategories();
  }, [activeSubCategory]);

  return (
    <div className="pl-6">
      <div className="border-l-2 pl-4 border-dotted border-primary-green">
        <div>
          {subCategories.map((subCategory) => (
            <div key={subCategory.subcat_name_en}>
              <div onClick={() => handleSubCategoryClick(subCategory.id)}>
                <SubCategoryCard
                  subCategory={subCategory}
                  isActive={activeSubCategory === subCategory.id}
                />
              </div>
              {activeSubCategory === subCategory.id && (
                <SubCategoryDua subcatId={subCategory.subcat_id} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
