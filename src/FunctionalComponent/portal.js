import React, { useState } from "react";
// import { ReactDOM } from "react-dom";

function Portal() {
  return (
    <>
      <h1>Portal Demo</h1>
      <button>Click Me</button>
    </>
  );
}

export default function App1() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count => count + 1);
  };

  return (
    <>
      <div onClick={increment}>
        <p>you have clicked me {count} times</p>
        <Portal />
      </div>
    </>
  );
}
