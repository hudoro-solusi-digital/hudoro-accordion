import React from "react";
import ReactDOM from "react-dom/client";

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "../src";
import {IAccordionItem} from "../src";

const App = () => (
  <div>
    <h1>Testing Accordion Component</h1>
    <Accordion>
      <AccordionItem>
        <AccordionButton>button 1</AccordionButton>
        <AccordionPanel>Panel 1</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>button 2</AccordionButton>
        <AccordionPanel>Panel 2</AccordionPanel>
      </AccordionItem>
    </Accordion>
  </div>
);

ReactDOM.createRoot(document.getElementById("app")!).render(<App />);
