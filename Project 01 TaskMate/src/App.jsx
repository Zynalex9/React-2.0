import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddTask from "./components/addTask";
import ShowTask from "./components/ShowTask";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <Header />
      <AddTask taskList={taskList} setTaskList={setTaskList}/>
      <ShowTask taskList={taskList} setTaskList={setTaskList}/>
    </>
  );
}

export default App;
