import React from "react";
import { SeminarType } from "../../../utils/types";
import { useForm } from "react-hook-form";
import { dateValid } from "../../../utils/utils";

export type SeminarFormType = {
  title: string;
  data?: SeminarType[];
};

export type SeminarCreateType = {
  title: string;
  description: string;
  date: string;
  time: string;
  photo: string;
};

export const SeminarForm: React.FC<SeminarFormType> = ({ title }) => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isValid },
  } = useForm<SeminarCreateType>({ mode: "onBlur" });
  const handleFormSubmit = (data: SeminarCreateType) => {
    console.log(data);
    reset();
  };

  return (
    <form
      className="w-screen h-10/12 bg-white flex flex-col items-center gap-1 py-2 rounded-md"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <h3 className="font-bold text-center text-xl mb-2 ">{title}</h3>
      <label>
        <input
          className="form-input"
          placeholder="заголовок"
          type="text"
          {...register("title", {
            required: {
              value: true,
              message: "Поле обязатеное для заполнения",
            },
          })}
        />
        <div className="h-5">
          {errors.title && (
            <p className="text-red-600">{errors.title.message}</p>
          )}
        </div>
      </label>
      <label>
        <textarea
          className="form-input"
          rows={4}
          placeholder="описание"
          {...register("description", {
            required: {
              value: true,
              message: "Поле обязатеное для заполнения",
            },
          })}
        ></textarea>
        <div className="h-5">
          {errors.description && (
            <p className="text-red-600">{errors.description.message}</p>
          )}
        </div>
      </label>
      <label>
        <input
          className="form-input"
          type="text"
          placeholder="ссылка на фото"
          {...register("photo", {
            required: {
              value: true,
              message: "Поле обязатеное для заполнения",
            },
            pattern: {
              value: /^(https?:\/\/)/,
              message: "Не является ссылкой на изображение",
            },
          })}
        />
        <div className="h-5">
          {errors.photo && (
            <p className="text-red-600">{errors.photo.message}</p>
          )}
        </div>
      </label>

      <label>
        <input
          className="form-input"
          type="date"
          {...register("date", {
            required: {
              value: true,
              message: "Поле обязатеное для заполнения",
            },
            validate: dateValid,
          })}
        />
        <div className="h-5">
          {errors.date && <p className="text-red-600">{errors.date.message}</p>}
        </div>
      </label>

      <label>
        <input
          className="form-input"
          type="time"
          {...register("time", {
            required: {
              value: true,
              message: "Поле обязатеное для заполнения",
            },
          })}
        />
        <div className="h-5">
          {errors.time && <p className="text-red-600">{errors.time.message}</p>}
        </div>
      </label>

      <button className="btn-blue" type="submit" disabled={isValid}>
        отправить
      </button>
    </form>
  );
};
