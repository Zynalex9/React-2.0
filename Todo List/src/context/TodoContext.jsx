import { createContext, useContext, useState } from "react";

export const TodoContext = createContext({
  todo: [],
  addTodo: (todo) => {},
  deleteTodo: (todo) => {},
  editTodo: (id, todo) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos((prev) => [...prev, { ...newTodo, completed: false }]);
  };


  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
