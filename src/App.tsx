import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Button } from "./components/UI/Button/Button";
import { createPortal } from "react-dom";



function App() {
  const [isModalShow, setIsModalShow] = useState(false)

  const HandleClick = () => {
    setIsModalShow(!isModalShow)
  }
  return (
    <> 
    <span id="modal"></span>
      <Header>
        <a href="#">Logo</a>
        <Button className="btn-white justify-self-end" onClick={HandleClick} >Добавить</Button>
      </Header>
      <Main></Main>
      {
        isModalShow && createPortal(
          <div className="w-screen h-screen absolute t-0 r-0 bg-red-500" onClick={HandleClick}>121212</div>,
          document.getElementById('modal')!
        )
      }
    </>
  );
}

export default App;
