import React, { useState } from "react";
import { Button } from "../UI/Button/Button";



export const Header: React.FC<{onClick: ()=>void}> = React.memo(({onClick}) => {
  console.log("header");
  return (
    <header>
      <a href="#">Logo</a>
      <Button className="btn-white justify-self-end" onClick={()=> onClick()}>
        Добавить
      </Button>
    </header>
  );
});
