import React from "react";
import ReactDOM from "react-dom";

const imgLink = "/asset/imgs/sharjeel.jpg";

ReactDOM.render(
  <React.Fragment>
    <img src={imgLink} alt="sharjeel" />
  </React.Fragment>,
  document.getElementById("root")
);
