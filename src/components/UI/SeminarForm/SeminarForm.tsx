import React from "react";
import { SeminarType } from "../../../utils/types";

export type SeminarFormType = {
    title: string,
    data?: SeminarType[]
}

export const SeminarForm: React.FC<SeminarFormType> = ({title}) => {
  return (
    <form className="w-screen h-10/12 bg-white flex flex-col items-center gap-5 py-2 rounded-md">
        <h3 className="font-bold text-center text-xl mb-2 ">{title}</h3>
      <input className="form-input" placeholder="заголовок" type="text" name="title" />
      <textarea className="form-input" rows={4} name="description" placeholder="описание"></textarea>
      <input className="form-input" type="text" name="photo" placeholder="ссылка на фото"/>
    
      <input className="form-input" type="date" name="date"/>
      <input className="form-input" type="time" name="time" />
      <button className="btn-blue">отправить</button>
    </form>
  );
};
