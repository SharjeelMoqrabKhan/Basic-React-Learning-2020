import React from "react";
import Card from "./Card";
import movieList from "./movieDetails";

const clickHandler = () => {
  let movieProduce = prompt("Netflex or Amazon Please Eneter");
  movieProduce === movieList[0].produce
    ? console.log("Match")
    : console.log("not found");
};

const ShowCard = movieList.map((value, index) => {
  return (
    <Card
      name={value.movieName}
      img={value.imageURL}
      link={value.link}
      key={index}
    />
  );
});

const App = () => {
  return (
    <>
      <h1 className="headingOne">Top Movies</h1>
      {ShowCard}
      <button onClick={clickHandler}>Search</button>
    </>
  );
};

export default App;
