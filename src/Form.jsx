import React, { useState } from "react";
import "../src/event.css";

const Form = () => {
  const [fullName, setFullname] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFullname((preValue) => {
      if (name === "firstName") {
        return {
          firstName: value,
          lastName: preValue.lastName,
          email: preValue.email,
        };
      } else if (name === "lastName") {
        return {
          firstName: preValue.firstName,
          lastName: value,
          email: preValue.email,
        };
      } else if (name === "email") {
        return {
          firstName: preValue.firstName,
          lastName: preValue.lastName,
          email: value,
        };
      }
    });
  };

  return (
    <div>
      <h1 style={{ color: "white" }}>
        Hi {fullName.firstName} {fullName.lastName}
      </h1>
      <p> {fullName.email}</p>
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
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={fullName.email}
          onChange={inputHandler}
        />
        <button
          type="submit"
          style={{ margin: "20px" }}
          onClick={() => {
            alert(
              fullName.firstName +
                "\n" +
                fullName.lastName +
                "\n" +
                fullName.email +
                "\n" +
                "SUBMITTED"
            );
          }}
        >
          Say Hi
        </button>
      </form>
    </div>
  );
};

export default Form;
