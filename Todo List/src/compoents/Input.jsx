import React from "react";
import { useTodo } from "../context";

const Input = () => {
  const {addTodo} = useTodo()
  return (
    <div className="flex items-center  justify-center flex-col w-full gap-4 py-5">
      <h1 className="text-white text-4xl font-mono">Enter Your Task Here !!</h1>
      <div className="flex gap-5">
      <input
        type="text"
        placeholder="Drink Water at 2"
        className="border border-black py-4 px-6 rounded-xl block font-mono"
      />
      <button className="text-white border-white border-2 rounded-lg py-2 px-4 font-mono hover:bg-white hover:text-slate-800 transition-all">Add Todo</button>
      </div>
    </div>
  );
};

export default Input;
