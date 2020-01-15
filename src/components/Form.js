import React, { useState } from "react";
import MomentUtils from "@date-io/moment";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

export default function Form(props) {
  const { setTasks, taskToEdit, editTask, afterEdit } = props;
  const [titleInput, setTitleInput] = useState(
    taskToEdit ? taskToEdit.title : ""
  );
  const [descriptionInput, setDescriptionInput] = useState(
    taskToEdit ? taskToEdit.description : ""
  );
  const [selectedDate, handleDateChange] = useState(
    taskToEdit ? taskToEdit.finishedBy : new Date()
  );

  // formSubmit adds or updates new/current task and updates state
  // taskToEdit is passed in to Form if isEditing from Task === true, else { a new task is created }
  const formSubmit = e => {
    e.preventDefault();

    let task = {
      id: taskToEdit ? taskToEdit.id : Math.random() + 1,
      title: e.target.elements.task.value,
      description: e.target.elements.description.value,
      isCompleted: taskToEdit ? taskToEdit.isCompleted : false,
      finishBy: selectedDate
    };

    if (task.title === "" || task.description === "")
      return alert("ENTER A TASK FIRST!");

    if (!taskToEdit) {
      setTasks(prev => [...prev, task]);
    } else {
      // editTask updates the tasks values (App.js) & afterEdit changes isEditing back to false
      editTask(task);
      afterEdit();
    }
    setTitleInput("");
    setDescriptionInput("");
  };

  // handles input for task title
  const handleTitleChange = event => {
    setTitleInput(event.target.value);
  };

  // handles input for task description
  const handleDescriptionChange = event => {
    setDescriptionInput(event.target.value);
  };

  return (
    <div className="todo-list">
      <form onSubmit={formSubmit}>
        <p className="taskTitle">Title:</p>
        <input
          className="input"
          type="text"
          name="task"
          value={titleInput}
          onChange={handleTitleChange}
          placeholder="Add title here"
        />
        <p className="taskTitle">Description:</p>
        <input
          className="input"
          type="text"
          name="description"
          value={descriptionInput}
          onChange={handleDescriptionChange}
          placeholder="Add description here"
        />
        <p className="taskTitle">Finish By:</p>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DatePicker
            value={selectedDate}
            onChange={handleDateChange}
            placeholder="date here"
          />
        </MuiPickersUtilsProvider>
        <br></br>

        <button onSubmit={formSubmit} className="form-btn">
          {taskToEdit ? "Update" : "Add New Task"}
        </button>
      </form>
    </div>
  );
}
