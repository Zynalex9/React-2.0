import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddTask from "./components/addTask";
import ShowTask from "./components/ShowTask";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState({});

  return (
    <>
      <Header />
      <AddTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
    </>
  );
}

export default App;
