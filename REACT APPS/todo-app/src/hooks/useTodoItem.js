import { useState } from "react";

export const useTodoItem = (initialTask) => {
  const [editing, setEditing] = useState(false);
  const [taskText, setTaskText] = useState(initialTask);

  const handleEdit = () => {
    setTaskText(initialTask);
    setEditing(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEditing(false);
  };

  const handleCancel = () => {
    setEditing(false);
    setTaskText(initialTask);
  };

  const handleChange = (event) => {
    setTaskText(event.target.value);
  };

  return {
    editing,
    taskText,
    handleEdit,
    handleSubmit,
    handleCancel,
    handleChange,
  };
};
