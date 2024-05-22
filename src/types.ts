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
}

export interface IAccordionPanel {
  children: ReactNode;
}
