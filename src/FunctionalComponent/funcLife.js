// import "./styles.css";
import React from "react";
import { useEffect, useState } from "react";
export default function FuncLife(props) {
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("Mounted");
  }, []);
  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  }, []);
  useEffect(() => {
    console.log(`The name changed ${name}`);
    return console.log("unmounted");
  }, [name]);

  return (
    <>
      <p>Component is mounted</p>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      ></input>
    </>
  );
}
