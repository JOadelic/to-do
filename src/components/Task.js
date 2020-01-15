import React, { useState } from "react";
import classNames from "classnames";
import moment from "moment";
import Form from "./Form";

export default function Task(props) {
  const { task, handleTaskDelete, markCompleted, editTask } = props;
  const [isEditing, setIsEditing] = useState(false);

  // changes isEditing back to false
  const afterEdit = () => {
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <Form taskToEdit={task} editTask={editTask} afterEdit={afterEdit} />
      ) : (
        <div
          className={classNames(task.isCompleted ? "todo-completed" : "todo")}
          key={task}
        >
          <p className="taskTitle">{task.title}</p>
          <p className="taskDescription">{task.description}</p>
          {!task.isCompleted ? (
            <p className="pending">PENDING</p>
          ) : (
            <p className="completed">COMPLETED!</p>
          )}
          <p className="finishBy">Finish By:</p>
          {moment(task.finishBy).format("MMM Do YY")}
          <button onClick={() => handleTaskDelete(task.id)} className="btn">
            delete
          </button>
          <button onClick={() => setIsEditing(true)} className="btn">
            edit
          </button>
          <button onClick={() => markCompleted(task.id)} className="btn">
            completed
          </button>
        </div>
      )}
    </>
  );
}
