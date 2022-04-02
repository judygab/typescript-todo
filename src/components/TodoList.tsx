import React from "react";
import { TodoListItem } from './TodoListItem';

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
  onRemoveTodo: RemoveTodo;
  editTodo: EditTodo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, onRemoveTodo, editTodo }) => {
  return (
    <ul>
     {todos.map(todo => (
       <TodoListItem
          key={todo.text}
          todo={todo}
          toggleComplete={toggleComplete}
          onRemoveTodo={onRemoveTodo}
          editTodo={editTodo}
        />
     ))}
    </ul>
  );
};
