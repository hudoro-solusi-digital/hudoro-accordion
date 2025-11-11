import React, {useContext, useEffect, useRef, useState} from "react";
import styles from "./accordion.module.css?raw";
import {createContext} from "react";
import {
  IAccordion,
  IAccordionButton,
  IAccordionItem,
  IAccordionPanel,
} from "./types";

const styleId = "hudoro-accordion-styles";
const injectStyles = (css: string) => {
  if (!document.getElementById(styleId)) {
    const styleElement = document.createElement("style");
    styleElement.id = styleId;
    styleElement.textContent = css;
    document.head.appendChild(styleElement);
  }
};
injectStyles(styles);

const AccordionContext = createContext<{
  allowMultiple: boolean;
  dataAccordion: {id: string; isActive: boolean}[];
  setDataAccordion?: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        isActive: boolean;
      }[]
    >
  >;
  toggleAccordion?: (id: string) => void;
}>({allowMultiple: false, dataAccordion: []});

// ______________________ACCORDION CONTAINER

export const Accordion = ({children, allowMultiple = false}: IAccordion) => {
  const [dataAccordion, setDataAccordion] = useState<
    {id: string; isActive: boolean}[]
  >([]);

  const toggleAccordion = (id: string) => {
    setDataAccordion((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {...item, isActive: !item.isActive};
        }
        if (allowMultiple) {
          return item;
        }
        return {...item, isActive: false};
      })
    );
  };

  return (
    <AccordionContext.Provider
      value={{allowMultiple, dataAccordion, setDataAccordion, toggleAccordion}}
    >
      <div className={"hudoro-accordion"}>{children}</div>
    </AccordionContext.Provider>
  );
};

// ______________________ACCORDION ITEM

const AccordionItemContext = createContext("");

export const AccordionItem = ({children, isOpen}: IAccordionItem) => {
  const [accordionId, setAccordionId] = useState("");
  const context = useContext(AccordionContext);

  const isActive = context.dataAccordion.find(
    (item) => item.id === accordionId
  )?.isActive;

  useEffect(() => {
    let data = {id: crypto.randomUUID(), isActive: false};

    setAccordionId(data.id);

    context.setDataAccordion!((prev) => [...prev, data]);
  }, []);

  return (
    <AccordionItemContext.Provider value={accordionId}>
      <div
        className={`hudoro-accordion-item ${(isActive || isOpen) && "active"}`}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};

// _______________________ ACCORDION BUTTON

export const AccordionButton = ({
  children,
  expand = true,
  defaultIcon = true,
}: IAccordionButton) => {
  const {toggleAccordion} = useContext(AccordionContext);
  const parentId = useContext(AccordionItemContext);

  return (
    <button
      className={`hudoro-accordion-button`}
      onClick={(e) => (expand ? toggleAccordion!(parentId) : {})}
    >
      {children}
      {/* <div>{children}</div> */}
      {expand && defaultIcon ? (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            className={"hudoro-accordion-arrow"}
          >
            <path
              d="M4 9.5L12 17.5L20 9.5"
              stroke="#111827"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      ) : null}
    </button>
  );
};

// _______________________ACCORDION PANEL

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
