import React from "react";

const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();

    if (task.id) {
      const updatedTaskList = taskList.map((todo) => {
        return todo.id === task.id
          ? {
              ...todo,
              name: e.target.task.value,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo;
      });
      setTaskList(updatedTaskList);
    } else {
      setTaskList([
        ...taskList,
        {
          id: date.getTime(),
          name: e.target.task.value,
          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
        },
      ]);
    }

    setTask({ id: "", name: "", time: "" }); // Reset task
    e.target.task.value = ""; // Clear the input field
  };

  return (
    <section className="addTask" onSubmit={handleSubmit}>
      <form>
        <input
          value={task.name || ""}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          type="text"
          name="task"
          autoComplete="off"
          placeholder="Add task"
          maxLength="25"
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default AddTask;
