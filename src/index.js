import React from "react";
import ReactDom from "react-dom";

const Netflix = () => {
  return (
    <React.Fragment>
      <h1>Netflix Pack</h1>
      <p>My Fav Series on Netflix</p>
      <ol>
        <li>MirzaPur</li>
        <li>Away</li>
        <li>Ozak</li>
      </ol>
    </React.Fragment>
  );
};

ReactDom.render(<Netflix />, document.getElementById("root"));
