import React, { useState } from "react";
import "../src/event.css";

const Form = () => {
  const [name, setname] = useState("");
  const [fullName, setFullName] = useState();

  return (
    <div>
      <h1 style={{ color: "white" }}>Hi {fullName}</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" onChange={(e) => setname(e.target.value)} />
        <button
          type="submit"
          style={{ margin: "20px" }}
          onClick={() => {
            setFullName(name);
          }}
        >
          Say Hi
        </button>
      </form>
    </div>
  );
};

export default Form;
