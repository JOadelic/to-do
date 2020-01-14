import React, { useState } from 'react';
import './App.css'
import classNames from 'classnames'


export default function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  console.log('tasks',tasks)

  // formSubmit adds new task and updates state
  const formSubmit = (e) => {
    e.preventDefault();
    
    let task = {
      id: Math.random() + 1,
      title: e.target.elements.task.value, 
      description: e.target.elements.description.value,
      isCompleted: false
    }

    if (task.title === "" || task.description === "") return alert("no task entered!")
    
    if (task) {
      setTasks((prev) => [...prev, task]);
      setInput('');
      setDescriptionInput('');
    }
  }

  // clears the entire list of tasks
  const clearTasks = () => {
    setTasks([])
  }

  // handles input for task title
  const handleTitleChange = (event) => {
    setInput(event.target.value)
  }
  
  // handles the deletion of single tasks
  const handleTaskDelete = (id) => {
    const updatedTaskList = tasks.filter(task => task.id !== id)
    setTasks(updatedTaskList);
  }

  // handles input for task description
  const handleDescriptionChange = (event) => {
    setDescriptionInput(event.target.value)
  }

  // handles the edit of task
  const handleTaskEdit = (id) => {

  }

  // marks task completed
  const markCompleted = (id) => {
    for (let task of tasks) {
      if (id === task.id) {
        task.isCompleted = true;
        console.log(tasks)
      }
    }
  }


  return (
    <div className='app'>
      <h1>To Do List</h1>
      <div className="todo-list">
        <form onSubmit={formSubmit}>
          <input
           className="input"
           type='text'
           name='task'
           value={input}
           onChange={handleTitleChange}
           placeholder="title"
          />
          <input
           className="input"
           type='text'
           name='description'
           value={descriptionInput}
           onChange={handleDescriptionChange}
           placeholder="description"
          /> 
          <button onSubmit={formSubmit} className="btn">Add Task</button>
        </form>
        <button onClick={clearTasks}>Clear list</button>
      </div>
        <div>
          {tasks.map(task => (
          <div className='todo' key={task}>
            {task.title}<br></br>
            {task.description}
            <button onClick={() => handleTaskDelete(task.id)}>delete</button>
            <button onClick={() => handleTaskEdit(task.id)}>edit</button>
            <button onClick={() => markCompleted(task.id)}>completed</button>
          </div>))}
        </div>
    </div>
  )
}

{/* <li className={classNames("single-conversation", { "hidden": props.uniqueid !== props.convo })}> */}
