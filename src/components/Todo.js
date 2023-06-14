import React, { useState } from "react";
import "./style.css";
import { FaRegTrashAlt } from "react-icons/fa";
import {BsPlusCircleFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

const Todo = () => {
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);
  const [toggleSubmit, setToggleSubmit]= useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const addItem = () => {
    if (!inputData) {
      alert('plz fill in the data')
    } 
    else if (inputData && !toggleSubmit)
    {
      setItems (
        items.map((curElem) =>{
        if(curElem.id === isEditItem) {
         return { ...curElem, name:inputData}
        }

        return curElem;
      }) 
      )
       setToggleSubmit(true);

       setInputData('');
       setIsEditItem(null);
      }
    
    else {
      const allInputData = {
        id: new Date().getTime().toString(), name: inputData,
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  const deleteItem = (index) => {
    // console.log(index);
    const updatedItems = items.filter((curElem) => {
      return index !== curElem.id;
    });
    setItems(updatedItems);
  };

  // steps for editing the items
  //     when user click the edit button
  //     1) get the id n name of the data to which the user clicked
  //     2) set the toggle mode to change the submit button to edit button
  //     3) now update the value of the setInputData with the updated value to the edit
  //     4)to pass the current elemet id to the new state variable for reference

  const editItem = (id) => {
    const newEditItems= items.find((curElem) => {
     return curElem.id===id;
    })
    console.log(newEditItems);
    setToggleSubmit(false);

    setInputData(newEditItems.name);
    setIsEditItem(id);
  };

  const removeAll = () => {
    setItems([]);
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />

          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Items..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            {
            toggleSubmit ?  <BsPlusCircleFill className="plus" onClick={addItem} title="Add Item" /> :
            <FiEdit   className="plus" title="Update Item" onClick={addItem} />
}
          </div>

          <div className="showItem">
            {items.map((curElem) => {
              return (
                <div className="eachItem" key={curElem.id}>
                  <h3>{curElem.name}</h3>

                  <div className="todo-btn">
                    <FiEdit   className="fa-times" title="Edit Item" onClick={() => editItem(curElem.id)} />
                    <FaRegTrashAlt
                      className="fa-times"
                      title="Delete Item"
                      onClick={() => deleteItem(curElem.id)}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showItem">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
