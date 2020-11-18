import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import md from "./movieDetails";


ReactDOM.render(
  <React.Fragment>
    <Card img={md[0].imageURL} name={md[0].movieName} link={md[0].link} />
    <Card img={md[1].imageURL} name={md[1].movieName} link={md[1].link} />
    <Card img={md[2].imageURL} name={md[2].movieName} link={md[2].link} />
  </React.Fragment>,
  document.getElementById("root")
);
