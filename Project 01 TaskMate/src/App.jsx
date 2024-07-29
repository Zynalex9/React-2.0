import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AddTask from "./components/addTask";
import ShowTask from "./components/ShowTask";

function App() {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("tasklist")) || []
  );
  const [task, setTask] = useState({});
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "medium"
  );
  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(taskList));
  }, [taskList]);
  useEffect(() => {
    // document.documentElement.classList.remove(
    //   "light",
    //   "medium",
    //   "dark",
    //   "gOne",
    //   "gTwo",
    //   "gThree"
    // );
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
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
