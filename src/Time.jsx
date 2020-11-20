import React, { useState } from "react";

const Time = () => {
  const [time, settime] = useState(new Date().toLocaleTimeString());
  return (
    <React.Fragment>
      <h3>{time}</h3>
      <button
        onClick={() => {
          settime(new Date().toLocaleTimeString());
        }}
      >
        Get Time
      </button>
    </React.Fragment>
  );
};

export default Time;
