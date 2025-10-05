import React, { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState([]);
  const [newtsk, setnewtask] = useState("");

  function handleInoChan(event) {}
  function AddNEwTask() {}
  function deleteTask(index) {}
  function MoveTaskUp(index) {}
  function MoveTaskDown(index) {}

  return (
    <>
      <div className="ToDoList">
        <h1>To Do List</h1>
        
      </div>
    </>
  );
}
export default ToDoList;
