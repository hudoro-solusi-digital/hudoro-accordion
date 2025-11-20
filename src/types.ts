import React, {ReactNode} from "react";

export interface IAccordion {
  children: ReactNode;
  allowMultiple?: boolean;
  style?: React.CSSProperties;
}

export interface IAccordionItem {
  children: ReactNode;
  isOpen?: boolean;
}

export interface IAccordionButton {
  children: ReactNode;
  expand?: boolean;
  defaultIcon?: boolean;
}

export interface IAccordionPanel {
  children: ReactNode;
}
