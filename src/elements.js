import React, { useState, useMemo, useCallback, memo } from "react";
import classes from "./elements.module.css";
import { Button } from "@material-ui/core";

const CSSElement = memo(() => (
  <div>
    <button className={`${classes.buttonRoot} ${classes.buttonText} ${classes.disabled}`} disabled>
      <span className={classes.buttonLabel}>Click</span>
    </button>
  </div>
));

const MaterialElement = memo(() => {
  return (
    <div>
      <Button disabled>Click</Button>
    </div>
  );
});

const getMaterialElements = () => {
  const elements = [];
  let index = 10000;

  while ((index -= 1) > 0) {
    elements.push(<MaterialElement key={index} />);
  }
  return elements;
};

const getCSSElements = () => {
  const elements = [];
  let index = 10000;

  while ((index -= 1) > 0) {
    elements.push(<CSSElement key={index} />);
  }
  return elements;
};

const App = () => {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("css");

  const cssElements = useMemo(() => getCSSElements(), []);
  const materialElements = useMemo(() => getMaterialElements(), []);

  const toggleType = useCallback(
    () => setType(type => (type === "css" ? "material" : "css")),
    []
  );
  const handleClick = useCallback(() => setShow(show => !show), []);

  return (
    <>
      <button onClick={handleClick}>Click</button>
      <button onClick={toggleType}>{type}</button>
      {show && (type === "css" ? cssElements : materialElements)}
    </>
  );
};

export default App;
