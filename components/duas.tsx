"use client";

import React, { useEffect, useState } from "react";
import DuaCard from "./dua-card";
import { ScrollArea } from "./ui/scroll-area";

// Define the interface for Duas props
interface Dua {
  id: number;
  cat_id: number;
  subcat_id: number;
  dua_id: number;
  dua_name_bn: string;
  dua_name_en: string;
  top_bn: string;
  top_en: string;
  dua_arabic: string;
  dua_indopak: string;
  clean_arabic: string;
  transliteration_bn: string;
  transliteration_en: string;
  translation_bn: string;
  translation_en: string;
  bottom_bn: null;
  bottom_en: null;
  refference_bn: string;
  refference_en: string;
  audio: string;
}

interface DuasProps {
  duas: {
    data: Dua[];
  };
}

const Duas = ({ duas }: DuasProps) => {
  return (
    <ScrollArea className="flex flex-col  h-[85vh]">
      <div className="flex flex-col gap-[10px]">
        {duas.data.map((dua) => (
          <DuaCard dua={dua} key={dua.dua_arabic} />
        ))}
      </div>
    </ScrollArea>
  );
};

export default Duas;
