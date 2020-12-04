import React, { useContext } from "react";
import ComB from "./ComB";
import { FirstName, LastName } from "../app2";
const ComA = () => {
  const fn = useContext(FirstName);
  const ln = useContext(LastName);
  return (
    <React.Fragment>
      <h1>
        {fn} {ln}
      </h1>
    </React.Fragment>
  );
};

export default ComA;
