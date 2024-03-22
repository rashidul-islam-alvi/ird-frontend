import React from "react";
import SettingsCard from "./settings-card";
import HeaderTitle from "./ui/header-title";

const settingsMenuList = [
  {
    id: 1,
    label: "Language Settings",
    iconSrc: "/Frame.svg",
    iconAlt: "settings_language_icon",
  },
  {
    id: 2,
    label: "General Settings",
    iconSrc: "/Frame 2.svg",
    iconAlt: "settings_general_icon",
  },
  {
    id: 3,
    label: "Font Settings",
    iconSrc: "/menu.svg",
    iconAlt: "settings_font_icon",
  },
  {
    id: 4,
    label: "Appearance Settings",
    iconSrc: "/menu.svg",
    iconAlt: "settings_appearance_icon",
  },
];

const Settings = () => {
  return (
    <div className="bg-white  px-5 py-[31px] flex flex-col gap-[25px] h-full rounded-[32px]">
      <div className="flex justify-center">
        <HeaderTitle headerLabel="Settings" className="text-[20px] font-bold" />
      </div>

      <div className="flex flex-col gap-[15px]">
        {settingsMenuList.map((menu) => (
          <SettingsCard key={menu.id} item={menu} />
        ))}
      </div>
    </div>
  );
};

export default Settings;
