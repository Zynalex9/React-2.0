import Todo from "./Todo";

interface TodoItem {
  title: string;
  description: string;
  date?: Date; // You can also use string type if you're passing date as a string
}

const Todos = () => {
  const todos: TodoItem[] = [
    {
      title: "Hello World",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque minima voluptas commodi sed, reiciendis.",
      date: new Date(), // Add a date if needed
    },
    {
      title: "Hello Again",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque minima voluptas commodi sed, reiciendis.",
      date: new Date(), // Add a date if needed
    },
  ];

  return (
    <div className="w-3/4">
      <div className="todos flex justify-center w-full flex-wrap">
        {todos.map((todo, index) => (
          <Todo key={index} {...todo} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
