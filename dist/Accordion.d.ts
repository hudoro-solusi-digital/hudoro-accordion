import React, { ReactNode } from "react";
interface IAccordion {
    children: ReactNode;
    allowMultiple?: boolean;
}
export declare const Accordion: ({ children, allowMultiple }: IAccordion) => React.JSX.Element;
interface IAccordionItem {
    children: ReactNode;
}
export declare const AccordionItem: ({ children }: IAccordionItem) => React.JSX.Element;
interface IAccordionButton {
    children: ReactNode;
}
export declare const AccordionButton: ({ children }: IAccordionButton) => React.JSX.Element;
interface IAccordionPanel {
    children: ReactNode;
}
export declare const AccordionPanel: ({ children }: IAccordionPanel) => React.JSX.Element;
export {};
