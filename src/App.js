import React, { useState } from 'react';
import './App.css';
import ToDos from './components/ToDos.js';

export default function App() {
  const [toDos, setToDos] = useState([
    {title: "make app", 
     description: "take home project", 
     status: "pending"}])

  return (
    <div className="App">
      <h1>App</h1>
      <ToDos toDos={toDos}/>
    </div>
  );
}


