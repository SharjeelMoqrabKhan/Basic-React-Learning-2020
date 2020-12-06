import React, { useState } from "react";
import ShowSearch from "./ShowSearch";

const Searching = () => {
  const [img, setimg] = useState("");
  return (
    <React.Fragment>
      <input
        type="Text"
        placeholder="Search"
        onChange={(e) => {
          setimg(e.target.value);
        }}
      />
      {img === "" ? null : <ShowSearch name={img} />}
    </React.Fragment>
  );
};

export default Searching;
