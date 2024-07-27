import React, { useState } from "react";
import "./AddTask.css";
function AddTask({tasks,setTasks}) {
  const [taskValue, setTaskValue] = useState("");
  const [progress, setProgress] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 1000),
      name: taskValue,
      completed: false,
    };
    setTaskValue("");
    setTasks([...tasks,task])
    console.log(task);
  };
  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          id="task"
          autoComplete="off"
          placeholder="Enter your task here"
          autoFocus
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
        />
        <button type="submit">Add Task</button>
        <select
          onChange={(event) => setProgress(event.target.value)}
          value={progress}
        >
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>
        <span className="reset" onClick={(e) => setTaskValue("")}>
          Reset
        </span>
      </form>
    </section>
  );
}

export default AddTask;
