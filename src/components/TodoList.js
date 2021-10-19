import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (!task.text || /^\s*$/.test(task.text)) {
      return;
    }

    const newTasks = [task, ...tasks];

    setTasks(newTasks);
    console.log(...newTasks);
  };

  const updateTask = (taskId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
      }

    setTasks((prev) =>
      prev.map((item) => (item.id === taskId ? newValue : item))
    );
  };

  const completeTask = (id) => {
    let updateTask = tasks.map((task) => {
      if (task.id == id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setTasks(updateTask);
  };

  const handleDelete = (id) => {
    const removeArr = [...tasks].filter((task) => task.id !== id);
    setTasks(removeArr);
  };

  return (
    <div className='todo-app'>
      <h1>Whats the plan for today?</h1>
      <TodoForm onSubmit={addTask} />
      <Todo
        tasks={tasks}
        completeTask={completeTask}
        handleDelete={handleDelete}
        updateTask = {updateTask}
      />
    </div>
  );
};

export default TodoList;
