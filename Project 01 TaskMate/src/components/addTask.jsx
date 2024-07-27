import React from "react";

const AddTask = ({ taskList, setTaskList }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    setTaskList([
      ...taskList,
      {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      },
    ]);
  };
  return (
    <section className="addTask" onSubmit={handleSubmit}>
      <form>
        <input
          type="text"
          name="task"
          id=""
          autoComplete="off"
          placeholder="add task"
          maxLength="25"
        />
        <button>Add</button>
      </form>
    </section>
  );
};

export default AddTask;
