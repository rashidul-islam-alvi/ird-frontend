"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import ImageComponent from "./ui/custom-image-component";

const SettingsCard = ({ item }: any) => {
  const [showSettingSubmenu, setShowSettingSubmenu] = useState(false);

  const handleSettingMenuClick = () => {
    setShowSettingSubmenu(!showSettingSubmenu);
  };

  return (
    <div>
      <div
        onClick={handleSettingMenuClick}
        className={`flex px-[14px] py-[9px] gap-[13px] cursor-pointer items-center bg-[#F7F8FA] border-l-[6px]  font-medium ${
          showSettingSubmenu
            ? "border-primary-green text-primary-green"
            : "border-[#F7F8FA] text-[#868686]"
        }  rounded-[5px]`}
      >
        <div>
          <Button
            variant="outline"
            size="icon"
            className="bg-[#E8F0F5] rounded-full w-[38px] h-[38px]"
          >
            <ImageComponent
              src={item.iconSrc}
              alt={item.iconAlt}
              className="w-[24px] h-[24px]"
            />
          </Button>
        </div>

        <div>
          <h2 className="text-[16px] "> {item.label}</h2>
        </div>
      </div>
      {showSettingSubmenu && (
        <div className="flex border-[#F7F8FA]  border-[1px] h-[100px]"></div>
      )}
    </div>
  );
};

export default SettingsCard;
