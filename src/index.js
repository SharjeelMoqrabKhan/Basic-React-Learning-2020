import React from "react";
import ReactDOM from "react-dom";
import { Sum,Subtraction,Multi,Divi } from "./Calulator";

ReactDOM.render(
  <React.Fragment>
    <ul>
      <li>Addtion {Sum(4, 3)}</li>
      <li>Subtraction {Subtraction(4, 3)}</li>
      <li>Multiplication {Multi(4, 3)}</li>
      <li>Division {Divi(4,3)}</li>
    </ul>
  </React.Fragment>,
  document.getElementById("root")
);
