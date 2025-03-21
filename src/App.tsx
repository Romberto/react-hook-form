import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Button } from "./components/UI/Button/Button";
import { createPortal } from "react-dom";
import { ModalWindow } from "./components/UI/ModalWindow/ModalWindow";
import { SeminarForm } from "./components/UI/SeminarForm/SeminarForm";



function App() {
  const [isModalShow, setIsModalShow] = useState(false)
  const handleClick = () => {
      setIsModalShow(true) 
  }

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) =>{
    if(e.target === e.currentTarget){
      setIsModalShow(false)
    }
  }
  return (
    <> 
    <span id="modal"></span>
      <Header>
        <a href="#">Logo</a>
        <Button className="btn-white justify-self-end" onClick={handleClick}>Добавить</Button>
      </Header>
      <Main></Main>
      {
        isModalShow && createPortal(
          <ModalWindow closeFn={handleClose}>
            <SeminarForm title="Добавте семинар"/>
          </ModalWindow>,
          document.getElementById('modal')!
        )
      }
    </>
  );
}

export default App;
