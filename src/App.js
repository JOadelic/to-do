import React, { useState, forwardRef } from 'react';
import './App.scss'
import classNames from 'classnames'
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';


export default function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [selectedDate, handleDateChange] = useState(new Date());
  
  // formSubmit adds new task and updates state
  const formSubmit = (e) => {
    e.preventDefault();
    
    let task = {
      id: Math.random() + 1,
      title: e.target.elements.task.value, 
      description: e.target.elements.description.value,
      isCompleted: false,
      dateCreated: new Date(),
      finishBy: selectedDate
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
  
  // handles the deletion of single tasks, keeps all tasks that don't == id
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
        setTasks([...tasks])
        console.log(tasks)
      }
    }
  }

  return (
    <div className='app'>
      <div className='title'>
        To Do List
      </div>
      <div className="todo-list">
        <form onSubmit={formSubmit}>
          <p>Title:</p>
          <input
           className="input"
           type='text'
           name='task'
           value={input}
           onChange={handleTitleChange}
           placeholder="title"
          />
          <p>Description:</p>
          <input
           className="input"
           type='text'
           name='description'
           value={descriptionInput}
           onChange={handleDescriptionChange}
           placeholder="description"
          /> 
          <p>Finish By: <i>click date to change</i></p>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
               value={selectedDate}
               onChange={handleDateChange}
                />
          </MuiPickersUtilsProvider>
          <br></br>
          <button onSubmit={formSubmit} className="btn">Add Task</button>
        </form>
        <button onClick={clearTasks} className="btn">Clear list</button>
      </div>
        <div>
          {tasks.map(task => (
          <div className={classNames(task.isCompleted ? 'todo-completed' : 'todo')} key={task}>
            {task.title}<br></br>
            {task.description}
            {!task.isCompleted ? <p>PENDING</p> : <p>COMPLETED</p>}
            {/* {task.finishBy} */}
            <button onClick={() => handleTaskDelete(task.id)} className="btn">delete</button>
            <button onClick={() => handleTaskEdit(task.id)} className="btn">edit</button>
            <button onClick={() => markCompleted(task.id)} className="btn">completed</button>
          </div>))}
        </div>
    </div>
  )
}
