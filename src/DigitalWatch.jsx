import React, { useState } from "react";

const DigitalWatch = () => {
  let time = new Date().toLocaleTimeString();
  const [currenttime, settime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    settime(time);
  };
  setInterval(updateTime, 1000);
  return (
    <React.Fragment>
      <h1>{currenttime}</h1>
    </React.Fragment>
  );
};

export default DigitalWatch;
