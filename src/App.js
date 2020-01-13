import React, { useState } from 'react';
import './App.css';
import ToDos from './components/ToDos.js';

export default function App() {
  const [todos, setToDos] = useState([
    {id: 1,
     title: "make app", 
     description: "take home project", 
     status: "pending"},
     {id: 2,
      title: "workout", 
      description: "go for a run", 
      status: "pending"},
     {id: 3,
       title: "food", 
       description: "make dinner", 
       status: "pending"}
    ])

  return (
    <div className="App">
      <h1>App</h1>
      <ToDos todos={todos}/>
    </div>
  );
}


