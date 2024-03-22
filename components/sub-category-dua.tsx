"use client";

import React, { useEffect, useState } from "react";
import SubCategoryDuaCard from "./sub-category-dua-card";
import { DuasProps } from "@/interfaces";

const SubCategoryDua = ({ subcatId }: { subcatId: number }) => {
  const [subCategoryDuas, setSubCategoryDuas] = useState<DuasProps[]>([]);

  useEffect(() => {
    const fetchSubCategoryDuas = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/duas?subcatId=${subcatId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch sub-categories");
        }
        const subCategoriesData = await response.json();
        setSubCategoryDuas(subCategoriesData.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSubCategoryDuas();
  }, [subcatId]);

  return (
    <div>
      {subCategoryDuas.map((subCatDua) => (
        <SubCategoryDuaCard
          key={subCatDua.refference_en}
          subCatDua={subCatDua}
        />
      ))}
    </div>
  );
};

export default SubCategoryDua;
