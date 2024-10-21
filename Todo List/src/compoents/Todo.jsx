import React from "react";

const Todo = ({ todos, todoColor }) => {
  console.log("todoColor", todoColor);
  return (
    <div
      className={`todo h-80 w-72 bg-amber-300 rounded-2xl p-4 flex flex-col justify-between`}
      style={{ backgroundColor: todoColor ? todoColor : "#FEFF9F"  }}>
      <div className="title  ">
        <h1 className="text-2xl font-bold mb-10">{todos.title}</h1>
        <div className="description">
            {todos.description}
        </div>
      </div>
      <div className="date flex w-full justify-between">
        <h1 className="text-black font-bold underline">Created At</h1>
        <h4>{todos.date} </h4>
      </div>
    </div>
  );
};

export default Todo;
