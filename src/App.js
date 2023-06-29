import { useState } from "react";
import "./App.css";
import "./style.css";
import ToDoLists from "./ToDoLists";

function App() {
  const [inputList, setInputList] = useState("");

  const [itemList, setItemList] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItemList((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("deleted");

    setItemList((oldItems) => {
      return oldItems.filter((curElem, index) => {
        return index !== id;
      });
    });
  };

  const removeAll = () => {
    setItemList([]);
  }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="✍ Add Items..."
            onChange={itemEvent}
            value={inputList}
          />
          <button className='plus' onClick={listOfItems} title="Add Item">
            {" "}
            +{" "}
          </button>
          <div>
            {itemList.map((curElem, index) => {
              return (
                <ToDoLists
                  text={curElem}
                  id={index}
                  key={index}
                  onSelect={deleteItems}
                />
              );
            })}
          </div>

          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span>Check List</span></button>
          </div>
        </div>
      </div>1
    </>
  );
}

export default App;
