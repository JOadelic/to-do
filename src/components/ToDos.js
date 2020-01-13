import React from 'react';

export default function ToDos(props) {
  console.log('these are the props',props)
  console.log('todos', props.todos)
  return (
    <div>
     {props.todos.map(todo => <h3>{todo.title}</h3>)}
    </div>
  )
}