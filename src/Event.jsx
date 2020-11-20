import React, { useState } from "react";
import "../src/event.css";

const Event = () => {
  const name = "Change Background";
  const bgColor = "#FFB7C5";
  const [bg, setBgColor] = useState(bgColor);
  const [nameShow, setNameShow] = useState(name);
  const cilckHandler = () => {
    const newBg = "#d3dede";
    setBgColor(newBg);
    setNameShow("Changed");
  };
  return (
    <div style={{ background: bg }}>
      <button onClick={cilckHandler}>{nameShow}</button>
    </div>
  );
};

export default Event;
