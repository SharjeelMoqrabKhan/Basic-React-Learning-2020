import React, { useState } from "react";
import "./todo_app.css";

const TodoApp = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  const listofItems = () => {
    setItem((previousItems) => {
      return [...previousItems, input];
    });
    setInput("");
  };

  const removeItem = (id) => {
     setItem((previousItems) => {
       return previousItems.filter((arrElement, index) => index !== id);
     });
  };

  return (
    <React.Fragment>
      <div className="main_div">
        <div className="centent_div">
          <h1>Todo App</h1>
          <input
            type="text"
            placeholder="add task"
            onChange={inputHandler}
            value={input}
          />
          <button onClick={listofItems}>+</button>
          <ol>
            {item.map((itemValue, index) => {
              return (
                <li key={index} id={index}>
                  {itemValue}
                  <button onClick={removeItem}>-</button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TodoApp;
