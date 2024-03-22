import React from "react";
import ImageComponent from "./ui/custom-image-component";
import Link from "next/link";

const sidebarMenusList = [
  {
    id: 1,
    label: "Home",
    iconSrc: "/home.svg",
    iconAlt: "sidebar_home",
    href: "/home",
  },
  {
    id: 2,
    label: "Menu",
    iconSrc: "/menu.svg",
    iconAlt: "sidebar_menu",
    href: "/menu",
  },
  {
    id: 3,
    label: "Memorize",
    iconSrc: "/bulb.svg",
    iconAlt: "sidebar_bulb",
    href: "/memorize",
  },
  {
    id: 4,
    label: "Bookmark",
    iconSrc: "/bookmark.svg",
    iconAlt: "sidebar_bookmark",
    href: "/bookmark",
  },
  {
    id: 5,
    label: "Ruqyah",
    iconSrc: "/clip.svg",
    iconAlt: "sidebar_clip",
    href: "/ruqyah",
  },
  {
    id: 6,
    label: "Dua Info",
    iconSrc: "/dua-info.svg",
    iconAlt: "sidebar_dua-info",
    href: "/dua-info",
  },
  {
    id: 7,
    label: "Books",
    iconSrc: "/books.svg",
    iconAlt: "sidebar_books",
    href: "/books",
  },
];

const SideBar = () => {
  const sidebarMenus = sidebarMenusList.map((menu) => (
    <Link href={menu.href} key={menu.id}>
      <li className="bg-[#E8F0F5] w-10 h-10 flex justify-center items-center rounded-full">
        <ImageComponent
          src={menu.iconSrc}
          alt={menu.iconAlt}
          className="w-5 h-5"
        />
      </li>
    </Link>
  ));

  return (
    <div className="h-full flex flex-col justify-between items-center rounded-3xl px-[13px] w-fit py-[31px] bg-white">
      <div>
        <ImageComponent
          src="/logo.svg"
          alt="sidebar_logo"
          className="w-[73px] h-[73px]"
        />
      </div>

      <div>
        <ul className="flex flex-col gap-[27px]">{sidebarMenus}</ul>
      </div>

      <div>
        <div className="w-[57px] h-[57px] bg-primary-green rounded-[10px] flex justify-center items-center">
          <ImageComponent
            src="/support.svg"
            alt="sidebar_support_icon"
            className="w-6 h-6"
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
