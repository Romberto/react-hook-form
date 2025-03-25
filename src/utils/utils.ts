export const dateValid = (date: string) => {
  const selectedDate = new Date(date);
  const today = new Date();

  // Пример проверки: дата не должна быть в прошлом
  if (selectedDate < today) {
    return "Дата не может быть в прошлом";
  }

  // Если дата валидна, возвращаем true
  return true;
};

export const formatDate = (dateString: string) => {
  const [year, month, day] = dateString.split(".");
  return `${day}-${month}-${year}`;
};

export const formatDateToDB = (date: string) => {
  const [year, month, day] = date.split("-")
  return `${day}.${month}.${year}`
}
