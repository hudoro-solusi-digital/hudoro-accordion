import React from "react";
import ReactDOM from "react-dom/client";

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "../src";

const App = () => (
  <div>
    <h1>Testing Accordion Component</h1>
    <Accordion allowMultiple>
      <AccordionItem isOpen>
        <AccordionButton>test</AccordionButton>
        <AccordionPanel>Panel 1</AccordionPanel>
      </AccordionItem>
      <AccordionItem isOpen>
        <AccordionButton>button 2</AccordionButton>
        <AccordionPanel>
          <div>Panel 2</div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  </div>
);

ReactDOM.createRoot(document.getElementById("app")!).render(<App />);
