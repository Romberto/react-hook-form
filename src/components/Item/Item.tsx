import React, { useEffect, useState } from 'react';
import { Button } from '../UI/Button/Button';
import FAKE_PHOTO from "../../assets/noneforo-700x700.jpg";
import { SeminarType } from '../../utils/types';

export const Item: React.FC<{ item: SeminarType }> = React.memo(({ item }) => {
        console.log('render')
      const [isImageLoaded, setIsImageLoaded] = useState(false);
      const [hasImageError, setHasImageError] = useState(false);
      useEffect(() => {
        if (hasImageError) {
          // Если произошла ошибка, не пытаемся загрузить изображение снова
          setIsImageLoaded(false);
        }
      }, [hasImageError]);
    
      const handleImageLoad = () => {
        setIsImageLoaded(true);
        setHasImageError(false); // сброс флага ошибки
      };
    
      const handleImageError = () => {
        setIsImageLoaded(false);
        setHasImageError(true); // установить флаг ошибки
      };
  return (
    <li
    className="grid grid-rows grid-cols-2 items-center gap-3 border-blue-700 border-2 py-3 px-2 rounded "
  >
    <img
    className="col-span-full min-h-80"
      src={isImageLoaded && !hasImageError ? item.photo : FAKE_PHOTO}
      onLoad={handleImageLoad}
      onError={handleImageError}
      alt="баннер семинара"
    />
    <h3 className="col-span-full text-3xl font-bold text-center">{item.title}</h3>
    <p className="col-span-full text-base">{item.description}</p>
    <div className="col-span-1 flex justify-between h-7">
      <span>{item.date}</span>
      <span>{item.time}</span>
    </div>
    <Button className="btn-blue col-span-1">Настроить</Button>
  </li>
  );
});

