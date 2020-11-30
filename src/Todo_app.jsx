import React, { useState } from "react";
import "./todo_app.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const TodoList = () => {
  const [state, setstate] = useState("");
  const [item, setitem] = useState([]);

  const onChangeHandler = (event) => {
    setstate(event.target.value);
  };

  const updateItem = () => {
    setitem((previousItems) => {
      return [...previousItems, state];
    });
    setstate("");
  };

  return (
    <React.Fragment>
      <div className="main_div">
        <div className="centent_div">
          <h1>Todo App</h1>
          <input
            type="text"
            placeholder="enter your task"
            value={state}
            onChange={onChangeHandler}
          />
          <Button onClick={updateItem}>
            <AddIcon />
          </Button>
          <ul>
            {item.map((value) => {
              return <li> {value} </li>;
            })}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TodoList;
