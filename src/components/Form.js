import React, { useState } from 'react';

export default function Form(props) {
  return (
    <div className="todo-list">
        <form onSubmit={formSubmit}>
          <p className='taskTitle'>Title:</p>
          <input
           className="input"
           type='text'
           name='task'
           value={input}
           onChange={handleTitleChange}
           placeholder="Add title here"
          />
          <p className='taskTitle'>Description:</p>
          <input
           className="input"
           type='text'
           name='description'
           value={descriptionInput}
           onChange={handleDescriptionChange}
           placeholder="Add description here"
          /> 
          <p className='taskTitle'>Finish By:</p>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <DatePicker
              value={selectedDate}
              onChange={handleDateChange}
              placeholder="date here"
            />
          </MuiPickersUtilsProvider>
          <br></br>
          <button onSubmit={formSubmit} className="btn">Add Task</button>
        </form>
        <button onClick={clearTasks} className="btn">Clear list</button>
      </div>
  )
}