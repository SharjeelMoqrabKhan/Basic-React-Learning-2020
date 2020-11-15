import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let currentTime = new Date().getHours();
let greeting;
let greetColor = {};

if (currentTime >= 1 && currentTime < 12) {
  greeting = "Good Morning";
  greetColor.color = "Green";
} else if (currentTime >= 12 && currentTime < 19) {
  greeting = "Good Evening";
  greetColor.color = "Orange";
} else {
  greeting = "Good Night";
  greetColor.color = "Red";
}

ReactDOM.render(
  <React.Fragment>
    <div className="box">
      <h1 style={({ fontFamily: "Goldman" }, { fontSize: "32px" })}>
        Hello Sir <span style={greetColor}> {greeting} </span>
      </h1>
    </div>
  </React.Fragment>,
  document.getElementById("root")
);
