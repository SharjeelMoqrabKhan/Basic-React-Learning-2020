import React from "react";
import ReactDOM from "react-dom";

const imgLink = [
  {
    id: 1,
    url: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    url: "https://picsum.photos/210/300",
  },
  {
    id: 3,
    url: "https://picsum.photos/220/300",
  },
];

ReactDOM.render(
  <React.Fragment>
    <h1>Image Gallery</h1>
    <img src={imgLink[0].url} alt="random" />
    <img src={imgLink[1].url} alt="random" />
    <img src={imgLink[2].url} alt="random" />
  </React.Fragment>,
  document.getElementById("root")
);
