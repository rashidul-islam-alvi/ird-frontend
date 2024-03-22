"use client";

import React, { useState } from "react";
import HeaderTitle from "./ui/header-title";
import { Input } from "./ui/input";
import Profile from "./navbar-profile";
import ImageComponent from "./ui/custom-image-component";

const Navbar = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <div className=" h-[10vh] items-center  flex">
      <div className="flex w-4/5 justify-between">
        <div>
          <HeaderTitle headerLabel="Dua Page" />
        </div>
        <div>
          <div
            className={`w-[371px] bg-white ${
              isInputFocused ? "border-primary-green" : "border-[#F3F4F6]"
            } border-2 flex items-center rounded-[10px]`}
          >
            <Input
              className="border-none outline-none text-[16px]"
              placeholder="Search by Dua Name"
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <div className="bg-[#F3F4F6] rounded-[6px] my-1 mr-1 px-[15px] py-[10px]">
              <ImageComponent
                src="/search.svg"
                alt="sidebar_search_icon"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/5 flex justify-end">
        <Profile />
      </div>
    </div>
  );
};

export default Navbar;
