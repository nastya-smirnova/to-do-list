import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task, deleteTodo }) => {
  const [value, setValue] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.length === 0) {
      deleteTodo(task.id);
      return;
    }

    editTodo(value, task.id);

    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        value={value}
        type="text"
        placeholder="Update task"
        onChange={(e) => setValue(e.target.value)}
        // required={true}
      />
      <button className="todo-btn" type="submit">
        Update task
      </button>
    </form>
  );
};
