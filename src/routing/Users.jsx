import React from "react";
import { Menu } from "./Menu";
import { useParams, useLocation } from "react-router-dom";

const Users = () => {
  const { firstName, lastName } = useParams();
  const location = useLocation();
  return (
    <React.Fragment>
      <Menu />
      <h1>
        Greeting {firstName} {lastName}
      </h1>
      <h2>URL {location.pathname}</h2>
      {location.pathname === `/user/sharjeel/riaz` ? (
        <button
          onClick={() => {
            alert("you are perimium user");
          }}
        >
          Verify
        </button>
      ) : null}
    </React.Fragment>
  );
};

export default Users;
