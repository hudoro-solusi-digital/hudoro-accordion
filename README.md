# Hudoro accordion

Hudoro accordion is a strict and customizable accordion component for web development projects, designed for simplicity and adherence to strict design guidelines.

## Package instalation

Instal package using pnpm

```bash
  pnpm add @hudoro/accordion
```

Instal package using yarn

```bash
  yarn add @hudoro/accordion
```

Instal package using npm

```bash
  npm i @hudoro/accordion
```

## Usage/Examples (you can combine using icon package hudoro)

```javascript
 import React from "react";
import ReactDOM from "react-dom/client";

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@hudoro/accordion";

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


```

## Props @hudoro/accordion

#### Props that you can pass to <Accordion {...props}></Accordion>

| Prop Name     | Value     | required |
| :------------ | :-------- | :------- |
| children      | ReactNode | false    |
| allowMultiple | boolean   | false    |

#### Props that you can pass to <AccordionItem {...props}></AccordionItem>

| Prop Name | Value     | required |
| :-------- | :-------- | :------- |
| children  | ReactNode | false    |

#### Props that you can pass to <AccordionButton {...props}></AccordionButton>

| Prop Name | Value     | required |
| :-------- | :-------- | :------- |
| children  | ReactNode | false    |

#### Props that you can pass to <AccordionPanel {...props}></AccordionPanel>

| Prop Name | Value     | required |
| :-------- | :-------- | :------- |
| children  | ReactNode | false    |
