import React, { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState(["Wake Up:","Bath:","Eat:","Games:","Sleep:"]);
  const [newtsk, setnewtask] = useState("");

  function handleInoChan(event) {
    setnewtask(event.target.value);
  }
  function AddNEwTask() {
    if (newtsk.trim() !== "") {
      setTask([...task, newtsk]);
      setnewtask("");
    }
  }
  function deleteTask(index) {
    const updatedTasks = task.filter((_, i) => i !== index);
    setTask(updatedTasks);

  }
  function MoveTaskUp(index) {
    if (index > 0) {
      const newTasks = [...task];
      [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
      setTask(newTasks);
    }
  }
  function MoveTaskDown(index) {
    if (index < task.length - 1) {
      const newTasks = [...task];
      [newTasks[index + 1], newTasks[index]] = [newTasks[index], newTasks[index + 1]];
      setTask(newTasks);
    }
  }

  return (
    <>
      <div className="ToDoList">
        <h1 className="htag">To Do List</h1>
        <input type="text" value={newtsk} onChange={handleInoChan} placeholder="Write Somethings" />
        <button className="add" onClick={AddNEwTask}>Add</button>

         <ol className="list">
          {task.map((tsk, index) => (
            <li  className="hell" key={index}>
              <span className="text">{tsk}</span>
              <button onClick={()=>deleteTask(index)}>Delete</button>
              <button onClick={()=>MoveTaskUp(index)}>Up</button>
              <button onClick={()=>MoveTaskDown(index)}>Down</button>
             </li>
          ))}
         </ol>
      </div>
    </>
  );
}
export default ToDoList;
