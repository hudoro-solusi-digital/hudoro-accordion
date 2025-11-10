import {ReactNode} from "react";

export interface IAccordion {
  children: ReactNode;
  allowMultiple?: boolean;
}

export interface IAccordionItem {
  children: ReactNode;
}

export interface IAccordionButton {
  children: ReactNode;
  expand?: boolean;
  defaultIcon?: boolean;
}

export interface IAccordionPanel {
  children: ReactNode;
}
