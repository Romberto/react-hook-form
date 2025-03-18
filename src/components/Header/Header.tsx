import React, { useState } from "react";
import { createPortal } from "react-dom";

export const Header: React.FC<{
  className?: string;
  children?: React.ReactNode;
}> = ({ className, children }) => {

    
  return (
  <header className={`header ${className ? className : ""}`}>
      {children}
    </header>
  );
};
