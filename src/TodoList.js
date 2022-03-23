import React from "react";
import "./App.css";
const TodoList = (props) => {
  console.log("props>>", props);
  const clickedItem = (key) => {
    const newList = props.allList.filter((item) => {
      return item.key !== key;
    });
    props.updatedList(newList);
  };
  return (
    <div className="todo">
      {props.allList.map((element) => {
        return (
          <div key={element.key} className="todoList">
            <li>
              <ul className="ulTag">{element.item}</ul>
            </li>
            <input
              type="checkbox"
              className="checkBox1"
              value={element.key}
              onClick={() => clickedItem(element.key)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
