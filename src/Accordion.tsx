import React, {ReactNode, useContext, useRef, useState} from "react";
import "./accordion.css";
import {createContext} from "react";

const AccordionContext = createContext<{
  allowMultiple: boolean;
}>({allowMultiple: false});

// ______________________ACCORDION CONTAINER
interface IAccordion {
  children: ReactNode;
  allowMultiple?: boolean;
}
export const Accordion = ({children, allowMultiple = false}: IAccordion) => {
  return (
    <AccordionContext.Provider value={{allowMultiple}}>
      <div className="hudoro-accordion">{children}</div>
    </AccordionContext.Provider>
  );
};

// ______________________ACCORDION ITEM
interface IAccordionItem {
  children: ReactNode;
}
export const AccordionItem = ({children}: IAccordionItem) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const {allowMultiple} = useContext(AccordionContext);

  const handleToggleElemet = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const childElements = e.currentTarget.parentElement?.children || [];
    ref.current = null;

    if (!allowMultiple) {
      for (let i = 0; i < childElements?.length; i++) {
        if (childElements[i].classList.contains("active")) {
          ref.current = childElements[i] as HTMLDivElement;
          childElements[i].classList.remove("active");
        }
      }
    }

    if (e.currentTarget.classList.contains("active")) {
      e.currentTarget.classList.remove("active");
    } else if (ref.current !== e.currentTarget) {
      e.currentTarget.classList.add("active");
    } else {
      e.currentTarget.classList.remove("active");
    }
  };
  return (
    <div
      className={`hudoro-accordion-item`}
      onClick={(e) => handleToggleElemet(e)}
    >
      {children}
    </div>
  );
};

// _______________________ ACCORDION BUTTON
interface IAccordionButton {
  children: ReactNode;
}
export const AccordionButton = ({children}: IAccordionButton) => {
  return (
    <button className="hudoro-accordion-button">
      <div>{children}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        className="hudoro-accordion-arrow"
      >
        <path
          d="M4 9.5L12 17.5L20 9.5"
          stroke="#111827"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};

// _______________________ACCORDION PANEL
interface IAccordionPanel {
  children: ReactNode;
}
export const AccordionPanel = ({children}: IAccordionPanel) => {
  return (
    <div
      className={`hudoro-accordion-panel`}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};
