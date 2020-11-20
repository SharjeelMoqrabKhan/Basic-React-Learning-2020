import React, { useState } from "react";

const Count = () => {
  const [count, setcount] = useState(0);
  return (
    <React.Fragment>
      <h1>{count}</h1>
      <button onClick={() => setcount(count+1)}>Click Me</button>
    </React.Fragment>
  );
};

export default Count;
