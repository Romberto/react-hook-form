import React, { FormEvent, useState } from "react";
import { SeminarCreateType, SeminarFormType } from "../../../utils/types";
import { useForm } from "react-hook-form";
import { dateValid, formatDate, formatDateToDB } from "../../../utils/utils";
import {
  useAddSeminarMutation,
  useRemoveSeminarMutation,
  useEditSeminarMutation,
} from "../../../servises/seminars";

export const SeminarForm: React.FC<SeminarFormType> = ({
  title,
  onClose,
  data,
}) => {
  const [isShowRemoveWindow, setIsShowRemoveWindow] = useState(false);
  const formattedData = {
    ...data,
    date: data?.date ? formatDate(data.date) : "",
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<SeminarCreateType>({
    mode: "onBlur",
    defaultValues: {
      ...formattedData,
    },
  });
  const [formMode, setFormMode] = useState<"add" | "edit" | "remove">("add");
  const [addSeminar, { isSuccess: isSuccessAdd, isError }] =
    useAddSeminarMutation();
  const [removeSeminar, { isSuccess: isRemoveSuccess }] =
    useRemoveSeminarMutation();
  const [editSeminar, { isSuccess: isEditSuccuss }] = useEditSeminarMutation();

  // функция отправки данных на сервер
  const handleFormSubmit = (data: SeminarCreateType) => {
    try {
      data.date = formatDateToDB(data.date);
      if (formMode === "add") {
        addSeminar(data);
      } else if (formMode === "remove") {
        if (data && data.id) {
          removeSeminar(data.id);
        }
      } else if (formMode === "edit") {
        if (data && data.id) {
          editSeminar(data);
        }
      }
      reset();
    } catch (error) {
      console.error("Ошибка при добавлении:", error);
    }
  };

  // клик по кнопке изменить
  const handleEditSeminar = () => {
    setFormMode("edit");
  };

  // клик по кнопке удалить, вызовет окно с подтверждением
  const handleRemove = (e: FormEvent) => {
    e.preventDefault();
    setIsShowRemoveWindow(true);
  };

  // клик по кнорке да при удаление семинара
  const handleYesRemove = () => {
    if (data && data.id) {
      removeSeminar(data.id);
    }
  };

  // клик по кнопке нет при удаление семинара
  const handleNoRemove = () => {
    setIsShowRemoveWindow(false);
  };

  // функция закрытия формы после отправки формы
  if (isSuccessAdd || isError || isEditSuccuss || isRemoveSuccess) {
    setTimeout(() => {
      onClose();
    }, 2000);
  }

  return (
    <>
      <form
        className={` ${
          isSuccessAdd || isError || isShowRemoveWindow || isEditSuccuss
            ? "w-0"
            : "w-screen"
        } h-11/12 bg-white flex flex-col items-center gap-1 py-2 rounded-md overflow-hidden`}
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
              validate: data ? undefined : dateValid,
            })}
          />
          <div className="h-5">
            {errors.date && (
              <p className="text-red-600">{errors.date.message}</p>
            )}
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
            {errors.time && (
              <p className="text-red-600">{errors.time.message}</p>
            )}
          </div>
        </label>

        {!data ? (
          <button className="btn-blue" disabled={!isValid} type="submit">
            отправить
          </button>
        ) : (
          <div className="flex w-9/12 justify-between">
            <button
              className="btn-blue"
              type="submit"
              onClick={handleEditSeminar}
            >
              изменить
            </button>
            <button className="btn-remove" onClick={handleRemove}>
              удалить
            </button>
          </div>
        )}
      </form>
      {isSuccessAdd && (
        <p className="w-screen h-7/12 py-3.5 px-2 bg-white text-green-700 rounded-md text-2xl text-center">
          Семинар добавлен
        </p>
      )}
      {isError && (
        <p className="w-screen h-7/12 py-3.5 px-2 bg-white text-red-600 rounded-md text-2xl text-center">
          Ошибка добавления
        </p>
      )}
      {isEditSuccuss && (
        <p className="w-screen h-7/12 py-3.5 px-2 bg-white text-green-700 rounded-md text-2xl text-center">
          Семинар изменён
        </p>
      )}
      {isShowRemoveWindow && (
        <div className="w-screen h-7/12 py-3.5 px-2 bg-white text-red-600 rounded-md text-2xl text-center">
          {isRemoveSuccess ? (
            <p>Успешное удаление</p>
          ) : (
            <div>
              <p className="mb-5">
                Удалить семинар
                <span className="text-black"> {data?.title}</span>?
              </p>
              <div className="flex w-full items-center justify-around">
                <button
                  className="btn-remove"
                  type="submit"
                  onClick={handleYesRemove}
                >
                  Да
                </button>
                <button className="btn-blue" onClick={handleNoRemove}>
                  Нет
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
