import React, { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [id, setId] = useState(1);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const increaseId = () => {
    setId((prevId) => prevId + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    increaseId();
    props.onSubmit({
      id: { id },
      text: input,
    });

    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your item"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button edit">Update</button>)
        </>
      ) : (
        <>
          (
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">Add a todo</button>)
        </>
      )}
    </form>
  );
};

export default TodoForm;
