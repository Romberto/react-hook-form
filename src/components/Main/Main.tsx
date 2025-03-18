import React from "react";
import { Item } from "../Item/Item";
import { useGetAllSeminarsQuery } from "../../servises/seminars";

export const Main: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const { data, error, isLoading } = useGetAllSeminarsQuery(undefined);
  if (isLoading) return <p>Loading...</p>;
  if (error || !data) return <p>Error...</p>;
  console.log(data);
  return (
    <>
      <div className="grid grid-cols-1 grig-rows-auto items-center gap-row-4">
        <ul className="flex flex-col items-center py-2 px-3 gap-4">
          {data.map((item) => {
            return <Item key={item.id} item={item} />;
          })}
        </ul>
        {children}
      </div>
    </>
  );
};
