"use client";

import React, { useState } from "react";
import ImageComponent from "./ui/custom-image-component";
import { Input } from "./ui/input";

const CategoryHeader = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <div className="flex flex-col gap-[15px] h-[15vh]">
      <div className="py-[18px] bg-primary-green flex justify-center items-center">
        <p className="text-[17px] text-white">Categories</p>
      </div>
      <div
        className={`mx-3 flex border-[1px] ${
          isInputFocused ? "border-primary-green border-2" : "border-[#E2E2E2]"
        }  items-center px-[13px] rounded-[7px] h-[50px]`}
      >
        <div>
          <ImageComponent
            src="/search.svg"
            alt="sidebar_search_icon"
            className="w-6 h-6"
          />
        </div>
        <Input
          className=" h-full text-[16px] border-none outline-none"
          placeholder="Search by categories"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </div>
    </div>
  );
};

export default CategoryHeader;
