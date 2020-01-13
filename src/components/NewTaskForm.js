import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function NewTaskForm() {
  const [input, setInput] = useState([{title: "", description: ""}]);

  console.log('input',input)

  const updateTitle = (event) => {
    setInput(input.title = event.target.value)
  }
  
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter new task here" value={input.title} onSubmit={updateTitle} />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Give a description here" value={input.description} />
      </Form.Group>
      {/* <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import NewTaskForm from './components/NewTaskForm';

function Todo({ todo, index }) {
  return (
    <div className="todo">
      {todo.title}
    </div>
  )
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <input 
      onSubmit={handleSubmit} 
      value={value}
      type="text" 
      className="input" 
      placeholder="enter new task here"
      onChange={e => setValue(e.target.value)} >
    </input>
  )
}


// export default function App() {
//   const [todos, setTodos] = useState([
//     {
//       title: "go to work",
//       description: "hadjkdaksdhskjdfs",
//       isCompleted: false
//     },
//     {
//       title: "build app",
//       description: "jhfdkjsfhsjf",
//       isCompleted: false
//     },{
//       title: "go home",
//       description: "sjhsdkjfkdfsls",
//       isCompleted: false
//     }]);

//     const addTodo = title => {
//       let newTodos = [...todos, { title }];
//       setTodos(newTodos);
//     }




//   return (
//     <div className="app">
//       <h1>To Do List</h1>
//       <div className="todo-list">
//       {todos.map((todo, index) => (
//         <Todo key={index} index={index} todo={todo} />
//         ))}
//       <TodoForm addTodo={addTodo} />
//       </div>
//     </div>
//   );
// }


