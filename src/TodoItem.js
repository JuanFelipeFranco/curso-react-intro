import React from "react";
import './TodoItem.css';
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <div className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>
      <CompleteIcon
          className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
          onClick={props.onComplete}
        />
      </div>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
      <div className="closer-container">
        <DeleteIcon className="Icon Icon-delete" onClick={props.onDelete} />
      </div>
    </li>
  );
};

export { TodoItem };