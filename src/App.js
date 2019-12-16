import React, { useState, useMemo, useCallback, memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import classes from "./app.module.css";

const CSSElement = memo(() => <div className={classes.victim}></div>);

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "50px",
    border: "1px solid lightblue",
    marginBottom: "5px"
  }
});

const MaterialElement = memo(() => {
  const classes = useStyles();

  return <div className={classes.root}></div>;
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
