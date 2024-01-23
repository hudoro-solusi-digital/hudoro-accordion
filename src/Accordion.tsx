import React, {ReactNode, useContext, useState} from "react";
import "./accordion.css";
import {createContext} from "react";

const AccordionContext = createContext<{
  isShow: boolean;
  handleToggleIsShow?: () => void;
}>({isShow: false});

// ______________________ACCORDION CONTAINER
interface IAccordion {
  children: ReactNode;
}
export const Accordion = ({children}: IAccordion) => {
  return <div className="hudoro-accordion">{children}</div>;
};

// ______________________ACCORDION ITEM
interface IAccordionItem {
  children: ReactNode;
}
export const AccordionItem = ({children}: IAccordionItem) => {
  const [isShow, setIsShow] = useState(false);
  const handleToggleIsShow = () => setIsShow((prev) => !prev);

  return (
    <AccordionContext.Provider value={{isShow, handleToggleIsShow}}>
      <div className={`hudoro-accordion-item ${isShow ? "active" : null}`}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

// _______________________ ACCORDION BUTTON
interface IAccordionButton {
  children: ReactNode;
}
export const AccordionButton = ({children}: IAccordionButton) => {
  const {handleToggleIsShow} = useContext(AccordionContext);
  return (
    <button onClick={handleToggleIsShow} className="hudoro-accordion-button">
      {children}
    </button>
  );
};

// _______________________ACCORDION PANEL
interface IAccordionPanel {
  children: ReactNode;
}
export const AccordionPanel = ({children}: IAccordionPanel) => {
  const {isShow} = useContext(AccordionContext);

  return (
    <div className={`hudoro-accordion-panel ${isShow ? "active" : null}`}>
      {children}
    </div>
  );
};
