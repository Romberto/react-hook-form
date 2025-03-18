import React from "react";
import { SeminarType } from "../../../utils/types";

export type SeminarFormType = {
    title: string,
    data?: SeminarType[]
}

export const SeminarForm: React.FC<SeminarFormType> = ({title}) => {
  return (
    <form className="w-screen h-screen bg-white flex flex-col items-center">
        <h3 className="font-bold text-center text-xl mb-2 ">{title}</h3>
      <input className="w-9/12 border-2 rounded-md not-[]:placeholder:text-gray-500 px-1 py-1 text-base" placeholder="заголовок" type="text" name="title" />
      <textarea rows={4} name="description"></textarea>
      <input type="text" name="photo" />
      <input type="date" name="date" />
      <input type="time" name="time" />
    </form>
  );
};
