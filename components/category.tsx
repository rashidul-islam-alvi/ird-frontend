"use server";

import React from "react";
import CategoryHeader from "./category-header";
import CategoryCardsWrapper from "./category-cards-wrapper";
import getAllCategories from "@/lib/getAllCategories";

const Category = async () => {
  const categoriesData = await getAllCategories();
  const categories = categoriesData.data;

  return (
    <div className="w-[430px] bg-white rounded-[10px] overflow-hidden ">
      <CategoryHeader />
      <div>
        <CategoryCardsWrapper categories={categories} />
      </div>
    </div>
  );
};

export default Category;
