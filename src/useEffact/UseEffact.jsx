import React, { useState, useEffect } from "react";

const UseEffact = () => {
  const [num, setnum] = useState(0);
  useEffect(() => {
    alert(`you have  clicked ${num} times`);
  }, [num]);
  return (
    <React.Fragment>
      <h1>{num}</h1>
      <button
        onClick={() => {
          setnum(num + 1);
        }}
      >
        Click Me
      </button>
    </React.Fragment>
  );
};

export default UseEffact;
