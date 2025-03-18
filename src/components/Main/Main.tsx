import React, { useEffect, useState } from "react";
import { SeminarType } from "../../utils/types";
import FAKE_PHOTO from "../../assets/noneforo-700x700.jpg";
import { Button } from "../UI/Button/Button";
import { Item } from "../Item/Item";

const data: SeminarType[] = [
  {
    id: "1",
    title: "Новинки Kosmoteros",
    description: "Обзор новых средств и методик от Kosmoteros.",
    date: "01.02.2025",
    time: "10:00",
    photo: "https://picsum.photos/id/1/750/730",
  },
  {
    id: "2",
    title: "Семинар по инновациям в косметологии",
    description:
      "Разбор новейших тенденций в косметологии и трендовых продуктов.",
    date: "03.02.2025",
    time: "11:00",
    photo: "https://picsum.photos/id/2/750/730",
  },
];

export const Main: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {

  return (
    <>
    <div className="grid grid-cols-1 grig-rows-auto items-center gap-row-4">
      <ul className="flex flex-col items-center py-2 px-3 gap-4">
        {data.map((item) => {
          return (
            <Item  key={item.id} item={item}/>
          );
        })}
      </ul>
      {children}
    </div>
    </>
    
  );
};
