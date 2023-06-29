import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
const ToDoLists = (props) => {
  return (
    <>
      <div className="todo_style">
        <ol>
          <li classname="list-items"> {props.text} </li>
          <li>
            {" "}
            <FaRegTrashAlt
            className="fa-times"
              onClick={() => {
                props.onSelect(props.id);
              }}
            />{" "}
          </li>
        </ol>
      </div>
    </>
  );
};

export default ToDoLists;
