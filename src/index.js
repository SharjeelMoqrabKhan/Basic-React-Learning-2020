import React from "react";
import ReactDOM from "react-dom";

const name = "Sharjeel";
let getDate = new Date().toLocaleDateString();
let getCurrentTime = new Date().toLocaleTimeString();

ReactDOM.render(
  <React.Fragment>
    <h1>Hi my name is {name}</h1>
    <p>Today date is {getDate}</p>
    <p>Today date is {getCurrentTime}</p>
  </React.Fragment>,
  document.getElementById("root")
);
