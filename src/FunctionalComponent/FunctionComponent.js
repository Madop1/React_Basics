import React from "react";
import "./funct.css";

function FuncApp() {
  return <FunctionComponent name="props" date={new Date()} />;
}
function FunctionComponent(props) {
  return (
    <div className="app">
      Hello world using Functional Component and using {props.name}{" "}
      {props.date.toLocaleDateString()}
    </div>
  );
}

export default FuncApp;
