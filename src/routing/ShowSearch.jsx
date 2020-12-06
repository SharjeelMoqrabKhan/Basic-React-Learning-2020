import React from "react";

const ShowSearch = (props) => {
  return (
    <div>
      <img
        src={`https://source.unsplash.com/200x200/?${props.name}`}
        alt="images"
      />
    </div>
  );
};

export default ShowSearch;
