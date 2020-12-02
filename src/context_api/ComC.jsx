import React from "react";
import { FirstName, LastName } from "../app2";
const ComC = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fn) => {
          return (
            <LastName.Consumer>
              {(ln) => {
                return (
                  <h1>
                    my fisrt name {fn} and last name {ln}
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};

export default ComC;
