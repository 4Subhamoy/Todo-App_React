import "./App.css";
import { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [list, setList] = useState(null);
  const [itemlist, setItemList] = useState([]);

  function handleChange(e) {
    setList(e.target.value);
    console.log("---", list);
  }
  function viewChange() {
    setItemList([...itemlist, { item: list, key: Date.now() }]);
    setList("");
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="titleName">My day</h1>
        <span className="spanElement">
          {new Date().toLocaleDateString("en-us", {
            weekday: "long",
            month: "short",
            day: "numeric",
          })}
        </span>
        <hr />
        <TodoList allList={itemlist} updatedList={setItemList} />
        <div className="bottomDiv">
          <hr />
          <input
            className="inputBox"
            type="text"
            name="listItem"
            value={list}
            onChange={(e) => handleChange(e)}
          />
          <button className="plusButton" onClick={() => viewChange()}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
