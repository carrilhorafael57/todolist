import React, { useState } from "react";
import TodoForm from "./TodoForm";

const Todo = ({ tasks, completeTask, handleDelete, updateTask }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTask(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return tasks.map((task, index) => (
    <div
      className={task.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={task.id} onClick={() => completeTask(task.id)}>
        {task.text}
      </div>
      <div className="icons">
        <button className="delete-icon" onClick={() => handleDelete(task.id)}>
          Close
        </button>
        <button
          className="edit-icon"
          onClick={() => setEdit({ id: task.id, value: task.text })}
        >
          Edit
        </button>
      </div>
    </div>
  ));
};

export default Todo;
