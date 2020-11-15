import React from "react";
import ReactDOM from "react-dom";
import "../src/index.css";

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
    <h1 className="heading">Image Gallery</h1>
    <p
      style={{
        textAlign: "center",
        fontFamily: "fantasy",
        textTransform: "capitalize",
      }}
    >
      Welcome to my site
    </p>
    <div className="galleryImages">
      <img src={imgLink[0].url} alt="random" />
      <img src={imgLink[1].url} alt="random" />
      <img src={imgLink[2].url} alt="random" />
    </div>
  </React.Fragment>,
  document.getElementById("root")
);
