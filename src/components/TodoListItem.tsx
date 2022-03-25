import React from "react";

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleComplete }) => {
  return (
    <li>
      <label className={todo.complete? "todo-row completed" : "todo-row"}>
      <input
        type="checkbox"
        onChange={() => toggleComplete(todo)}
        checked={todo.complete}
        />
        {todo.text}
      </label>
      <h1 className="text-3xl bg-black font-bold underline">
      Hello world!
    </h1>
    </li>
  )
}
