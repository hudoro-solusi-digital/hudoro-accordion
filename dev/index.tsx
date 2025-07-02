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
        <AccordionButton>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          voluptatum nulla dignissimos quia eius quo, ut odit adipisci impedit
          vel quos? Doloremque enim odit ipsa, repellat, aliquam modi aperiam
          mollitia pariatur soluta excepturi temporibus. Quia quasi
          voluptatibus, laborum obcaecati nesciunt facilis totam eveniet, eos
          maxime dolore eaque, ab vel nulla minus vero! Eos quam iusto incidunt
          delectus fugit ducimus, nobis numquam illum ut magnam earum deserunt
          asperiores voluptate fuga eum. Sapiente repudiandae molestias et
          voluptas ea quidem at excepturi eum recusandae, porro nemo hic ratione
          aliquam provident eius ipsam dignissimos ab placeat accusantium
          dolorum! Animi et aut pariatur ratione iusto.
        </AccordionButton>
        <AccordionPanel>Panel 1</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>button 2</AccordionButton>
        <AccordionPanel>
          <div>Panel 2</div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  </div>
);

ReactDOM.createRoot(document.getElementById("app")!).render(<App />);
