import React, { createContext } from "react";
import ComA from "../src/context_api/ComA";
const FirstName = createContext();
const LastName = createContext();

const App2 = () => {
  return (
    <React.Fragment>
      <FirstName.Provider value={"sharjeel"}>
        <LastName.Provider value={"Riaz"}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider>
    </React.Fragment>
  );
};

export default App2;
export { FirstName, LastName };
