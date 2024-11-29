import Input from "./compoents/Input";
import Todos from "./compoents/Todos";
import { TodoProvider, useTodo } from "./context";

export default function App() {
  return (
    <TodoProvider>
    <main className="bg-slate-900 min-h-screen w-full font-mono px-4">
      <Input />
      <Todos />
    </main>
    </TodoProvider>
  );
}
