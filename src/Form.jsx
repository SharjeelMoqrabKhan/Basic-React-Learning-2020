import React, { useState } from "react";
import "../src/event.css";

const Form = () => {
  const [name, setname] = useState("");
  const [fullName, setFullName] = useState();

  return (
    <div>
      <h1 style={{ color: "white" }}>Hi {fullName}</h1>
      <input type="text" onChange={(e) => setname(e.target.value)} />
      <button
        style={{ margin: "20px" }}
        onClick={() => {
          setFullName(name);
        }}
      >
        Say Hi
      </button>
    </div>
  );
};

export default Form;
