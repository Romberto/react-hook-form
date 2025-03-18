import React from 'react';

export type ModalType = {
    children?: React.ReactNode,
    closeFn: (e: React.MouseEvent<HTMLDivElement>)=>void
}

export const ModalWindow: React.FC<ModalType> = ({children, closeFn}) => {
    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        closeFn(e)
    }
  return (
    <div className="flex justify-center items-center w-screen h-screen fixed t-0 r-0 bg-blue-500 px-3 py-3" onClick={onClick}>{children}</div>
  );
};
