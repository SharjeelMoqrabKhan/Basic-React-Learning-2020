import React, { useState } from "react";
import "../src/event.css";

const Form = () => {
  const [fullName, setFullname] = useState({
    firstName: "",
    lastName: "",
  });

  const inputHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFullname((preValue) => {
      if (name === "firstName") {
        return {
          firstName: value,
          lastName: preValue.lastName,
        };
      } else if (name === "lastName") {
        return {
          firstName: preValue.firstName,
          lastName: value,
        };
      }
    });
  };

  return (
    <div>
      <h1 style={{ color: "white" }}>
        Hi {fullName.firstName} {fullName.lastName}
      </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={fullName.firstName}
          onChange={inputHandler}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={fullName.lastName}
          onChange={inputHandler}
        />
        <button type="submit" style={{ margin: "20px" }}>
          Say Hi
        </button>
      </form>
    </div>
  );
};

export default Form;
