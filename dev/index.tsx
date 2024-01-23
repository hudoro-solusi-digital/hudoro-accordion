import React from "react";
import ReactDOM from "react-dom";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "../src";

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

ReactDOM.render(<App />, document.getElementById("app"));
