import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../src/cardStyle.css";

const Card = (props) => {
  const { img, name, link } = props;
  return (
    <React.Fragment>
      <div className="box-field">
        <div className="card" style={{ width: "18rem" }}>
          <img src={img} className="card-img-top" alt="Gemini Man" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href={link} target="_" className="btn btn-primary">
              Watch
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
