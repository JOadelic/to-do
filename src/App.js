import React, { useState } from 'react';
import './App.css'

export default function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  
  const formSubmit = (e) => {
    e.preventDefault();
    
    let task = e.target.elements.task.value;
    
    if (task) {
      setTasks((prev) => [...prev, task]);
      setInput('')
    }
  }

  const clearTasks = () => {
    setTasks([])
  }

  const choose = () => {
    let chosenTask = Math.floor(Math.random() * tasks.length)
    alert(`Select task ${chosenTask + 1}`)
  }

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  const deleteTask = () => {

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
           onChange={handleInputChange}
           placeholder="title"
          />
          <button className="btn">Add Task</button>
          {/* {!input ? "" : <div>Add A Task!</div>} */}
        </form>
        <ol>
          {tasks.map(task => (<li className='todo' key={task}>{task}</li>))}
        </ol>
        <button disabled={tasks.length < 1 ? true : false} onClick={choose}>Select Random Task</button>
        <button onClick={clearTasks}>Clear list</button>
      </div>
    </div>
  )
}