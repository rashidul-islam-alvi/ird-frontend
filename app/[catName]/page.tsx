import Duas from "@/components/duas";
import getDuasByCategory from "@/lib/getDuasByCategory";
import React from "react";

interface Props {
  searchParams: {
    cat: number;
  };
}

const page = async ({ searchParams }: Props) => {
  const duasByCategory = getDuasByCategory(searchParams.cat);

  const duas = await duasByCategory;

  return (
    <div>
      <Duas duas={duas} />
    </div>
  );
};

export default page;
