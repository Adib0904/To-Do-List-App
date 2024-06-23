import React, { useState } from "react";

const ToDoList = () => {


  const [tasks, setTasks] = useState(['wake up early', 'Take a shower', 'Eat breakfast'])
  const [newTask, setNewTask] = useState('')

  const handleTask = (event) => {
    setNewTask(event.target.value)
  }
  const addTask = () => {

    if (newTask !== '') {
      setTasks(t => [...t, newTask])
      setNewTask('')
    }
  }

  const deleteTask = (i) => {
    const updateTask = tasks.filter((_, index) =>
      i !== index
    )
    setTasks(updateTask)
  }
  const moveUpTask = (index) => {

    if (index > 0) {

      const updateTask = [...tasks];
      [updateTask[index], updateTask[index - 1]] = [updateTask[index - 1], updateTask[index]]
      setTasks(updateTask)
    }
  }
  const movedownTask = (index) => {
    if (index < tasks.length - 1) {

      const updateTask = [...tasks];
      [updateTask[index], updateTask[index + 1]] = [updateTask[index + 1], updateTask[index]]
      setTasks(updateTask)
    }
  }

  return (
    <>
      <div className="header">
        <div>
          <h1>To-Do-List</h1>

          <input type="text" placeholder="Add a task..." className="input-task" onChange={handleTask} value={newTask} />
          <button className="add-task" onClick={addTask}>Add</button>
        </div>
        <div className="main">
          <ol>
            {
              tasks.map((task, index) => [
                <li key={index}> <span className="text"> {task}</span>
                  <button className="delete-task" onClick={() => deleteTask(index)}>Delete</button>
                  <button className="move-task" onClick={() => moveUpTask(index)}> &#128070;</button>
                  <button className="move-task" onClick={() => movedownTask(index)}>&#128071;</button>

                </li>
              ])
            }
          </ol>
        </div>
      </div >

    </>
  )
}

export default ToDoList;