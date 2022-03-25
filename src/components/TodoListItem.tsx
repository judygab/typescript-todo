import React from "react";
import { Dropdown } from "./Dropdown";

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}

const onDelete = () => {
  console.log('delete');
}

const onEdit = () => {
  console.log("Edit");
}

const dropdownOptions: Array<Option> = [
  {
    value: "Delete",
    onClick: onDelete
  },
  {
    value: "Edit",
    onClick: onEdit
  }
]

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleComplete }) => {
  return (
    <li>
      <label className={todo.complete? "todo-row completed" : "todo-row"}>
      <div>
        <input
          type="checkbox"
          onChange={() => toggleComplete(todo)}
          checked={todo.complete}
          />
          {todo.text}
      </div>
        <Dropdown
          options={dropdownOptions}
        />
      </label>
    </li>
  )
}
