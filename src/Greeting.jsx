import React from "react";
import "./index.css";

const Greeting = () => {
  let time = new Date().toLocaleTimeString();
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
  return (
    <React.Fragment>
      <div>
        <h1>
          Hello Sir{" "}
          <span style={greetColor}>
            {" "}
            {greeting} {time}
          </span>
        </h1>
      </div>
    </React.Fragment>
  );
};

export default Greeting;
