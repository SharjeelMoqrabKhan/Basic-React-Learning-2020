import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import movieList from "./movieDetails";

const showCard = movieList.map((value, index) => {
  return (
    <Card
      name={value.movieName}
      img={value.imageURL}
      link={value.link}
      key={index}
    />
  );
});

ReactDOM.render(
  <React.Fragment>
    <h1 className="headingOne">Top Movies on Amazon</h1>
    {showCard}
  </React.Fragment>,
  document.getElementById("root")
);
