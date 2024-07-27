import React from "react";

const ShowTask = ({ taskList, setTaskList }) => {
  const tasks = [
    { id: Date.now(), name: "Learn React", time: "4:57:31 PM 7/27/2024" },
    { id: Date.now(), name: "Learn JS", time: "4:57:31 PM 7/27/2024" },
    { id: Date.now(), name: "Learn OOP", time: "4:57:31 PM 7/27/2024" },
  ];
  return (
    <section className="showTask">
      <div className="head">
        <span>
          <span className="title">Todo</span>
          <span className="count">2</span>
        </span>
        <span className="clearAll">Clear All</span>
      </div>
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i className="bi bi-pencil-square"></i>
            <i className="bi bi-trash"></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowTask;
