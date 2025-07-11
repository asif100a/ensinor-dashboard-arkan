import ShopCard from "@/components/custom-ui/cards/instructors/ShopCard";
import { ShopTypes } from "@/lib/types";
import React from "react";

interface ShopCardsProps {
  shopItems: ShopTypes[];
}

export default function ShopCards({ shopItems }: ShopCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...shopItems, ...shopItems]?.map((item: ShopTypes) => (
        <ShopCard key={item._id} item={item} />
      ))}
    </div>
  );
}
