import React, { useState } from "react";

//Conditional Rendering

function Conditional() {
  const [state, setState] = useState("true");
  return (
    <>
      <div>Conditional Rendering</div>
      <button onClick={() => setState(!state)}>
        {state ? "Login" : "Logout"}
      </button>
      {state ? "Hi , Welcome" : "Thank you...Visit again!!!"}
    </>
  );
}

export default Conditional;
