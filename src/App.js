import React, { useState, forwardRef } from "react";
import Form from "./components/Form.js";
import "./App.scss";
import Task from "./components/Task.js";

export default function ToDo() {
  const [tasks, setTasks] = useState([]);

  // clears the entire list of tasks
  const clearTasks = () => {
    setTasks([]);
  };

  // handles the deletion of single tasks, keeps all tasks that don't === id
  const handleTaskDelete = id => {
    const updatedTaskList = tasks.filter(task => task.id !== id);
    setTasks(updatedTaskList);
  };

  // marks task completed
  const markCompleted = id => {
    for (let task of tasks) {
      if (id === task.id) {
        task.isCompleted = true;
        setTasks([...tasks]);
      }
    }
  };

  // handles the edit of task
  const editTask = updatedTask => {
    for (let task of tasks) {
      if (updatedTask.id === task.id) {
        task.title = updatedTask.title;
        task.description = updatedTask.description;
        task.finishBy = updatedTask.finishBy;
        setTasks([...tasks]);
      }
    }
  };

  return (
    <div className="app">
      <div className="title">To Do List</div>
      <Form setTasks={setTasks} />
      <div>
        {tasks.map(task => (
          <Task
            task={task}
            handleTaskDelete={handleTaskDelete}
            markCompleted={markCompleted}
            editTask={editTask}
          />
        ))}
      </div>
      <button onClick={clearTasks} className="btn">
        Clear list
      </button>
    </div>
  );
}
