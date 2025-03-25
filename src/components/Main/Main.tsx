import React from "react";
import { Item } from "../Item/Item";
import { useGetAllSeminarsQuery } from "../../servises/seminars";

export const Main: React.FC = () => {
  const { data, isLoading, isError } = useGetAllSeminarsQuery(undefined);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>что то пошло не так ;\</p>;

  return (
    <ul className="grid grid-cols-1 grig-rows-auto items-start justify-center gap-4 pt-20 md:grid-cols-2">
      {data?.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </ul>
  );
};
