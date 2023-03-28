import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ filteredTodos, deleteTodo, toggleTodo }) => {
  return (
    <ul className="todo-list-container">
      {filteredTodos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
