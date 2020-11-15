import React from "react";
import ReactDOM from "react-dom";

const firstName = "Sharjeel";
const middleName = "Moqrab";
const lastName = "Khan";

ReactDOM.render(
  <h1>
    Asalam O Ealikum {`${firstName} ${middleName} ${lastName}`}
  </h1>,
  document.getElementById("root")
);
