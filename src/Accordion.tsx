import React, {ReactNode, useContext, useRef} from "react";
import styles from "./accordion.module.css?raw";
// import stylesBind from "./accordion.module.css?raw";
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
  handlePushRef?: (component: HTMLDivElement) => void;
}>({allowMultiple: false});

// ______________________ACCORDION CONTAINER

export const Accordion = ({children, allowMultiple = false}: IAccordion) => {
  const multipeRefComp = useRef<HTMLDivElement[] | null>([]);

  const handlePushRef = (component: HTMLDivElement) => {
    const findIfComponentExist = multipeRefComp.current?.find(
      (item) => item === component
    );
    if (allowMultiple) {
      if (!findIfComponentExist) {
        // component.classList.add(styles.active);
        component.classList.add("active");
        component
          .querySelector(`.hudoro-accordion-arrow`)
          ?.classList.add(`hudoro-accordion-arrow-active`);
        multipeRefComp.current?.push(component);
      } else if (findIfComponentExist) {
        component
          .querySelector(`.hudoro-accordion-arrow`)
          ?.classList.remove(`hudoro-accordion-arrow-active`);
        component.classList.remove("active");
        multipeRefComp.current = multipeRefComp.current!.filter(
          (item) => item !== component
        );
      }
    } else {
      if (multipeRefComp.current?.length) {
        if (multipeRefComp.current[0] === component) {
          multipeRefComp.current[0]
            .querySelector(`.hudoro-accordion-arrow`)
            ?.classList.remove(`hudoro-accordion-arrow-active`);
          multipeRefComp.current[0].classList.remove("active");
          multipeRefComp.current = [];
        } else {
          multipeRefComp.current[0]
            .querySelector(`.hudoro-accordion-arrow`)
            ?.classList.remove(`hudoro-accordion-arrow-active`);
          multipeRefComp.current[0].classList.remove("active");
          multipeRefComp.current = [];
          component.classList.add("active");
          multipeRefComp.current[0] = component;
          multipeRefComp.current[0]
            .querySelector(`.hudoro-accordion-arrow`)
            ?.classList.add(`hudoro-accordion-arrow-active`);
        }
      } else {
        component.classList.add("active");
        component
          .querySelector(`.hudoro-accordion-arrow`)
          ?.classList.add(`hudoro-accordion-arrow-active`);
        multipeRefComp.current!.push(component);
      }
    }
  };

  return (
    <AccordionContext.Provider value={{allowMultiple, handlePushRef}}>
      <div className={"hudoro-accordion"}>{children}</div>
    </AccordionContext.Provider>
  );
};

// ______________________ACCORDION ITEM

export const AccordionItem = ({children}: IAccordionItem) => {
  return <div className={`hudoro-accordion-item`}>{children}</div>;
};

// _______________________ ACCORDION BUTTON

export const AccordionButton = ({
  children,
  expand = true,
  defaultIcon = true,
}: IAccordionButton) => {
  const {handlePushRef} = useContext(AccordionContext);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e.currentTarget.parentElement && handlePushRef) {
      handlePushRef(e.currentTarget.parentElement as HTMLDivElement);
    }
  };

  return (
    <button
      className={`hudoro-accordion-button`}
      onClick={(e) => (expand ? handleClick(e) : {})}
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
