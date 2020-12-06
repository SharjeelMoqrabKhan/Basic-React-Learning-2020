import React from "react";
import { Menu } from "./Menu";
import { useParams } from "react-router-dom";

const Users = () => {
  const { firstName, lastName } = useParams();
  return (
    <React.Fragment>
      <Menu />
      <h1>
        Greeting {firstName} {lastName}
      </h1>
    </React.Fragment>
  );
};

export default Users;
