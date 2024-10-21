import React from "react";
import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      id: 1,
      title: "Buy groceries",
      description: "Get milk, bread, and eggs from the store",
      date: "2024-10-21",
    },
    {
      id: 2,
      title: "Complete React project",
      description: "Finish the task tracker app using React",
      date: "2024-10-22",
    },
    {
      id: 3,
      title: "Workout",
      description: "Go for a 30-minute run in the morning",
      date: "2024-10-23",
    },
    {
      id: 4,
      title: "Read a book",
      description: "Finish reading 'Atomic Habits'",
      date: "2024-10-24",
    },
    {
      id: 5,
      title: "Plan weekend trip",
      description: "Research destinations for a short getaway",
      date: "2024-10-25",
    },
    {
      id: 6,
      title: "Client meeting",
      description: "Discuss project progress with client over Zoom",
      date: "2024-10-26",
    },
    {
      id: 7,
      title: "Clean the house",
      description: "Vacuum, dust, and mop all rooms",
      date: "2024-10-27",
    },
    {
      id: 8,
      title: "Write blog post",
      description: "Draft a blog post about React hooks",
      date: "2024-10-28",
    },
    {
      id: 9,
      title: "Pay bills",
      description: "Pay electricity, water, and internet bills online",
      date: "2024-10-29",
    },
    {
      id: 10,
      title: "Grocery shopping",
      description: "Buy ingredients for weekend dinner",
      date: "2024-10-30",
    },
  ];
  const colors = ["#FEFF9F", "#D3EE98", "#A0D683", "#72BF78", "FDFAD9","#FABC3F","#C7253E","#F5F5F7","#E8D8C4"];
  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  return (
    <div className="w-full flex gap-5 items-center flex-wrap">
      {todos.map((todo) => (
        <Todo todos={todo} todoColor={getRandomColor()} />
      ))}
    </div>
  );
};

export default Todos;
