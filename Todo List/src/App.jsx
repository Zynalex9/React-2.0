import Input from "./compoents/Input";
import Todos from "./compoents/Todos";

export default function App() {
  console.log("appp")
  return (
    <main className="bg-slate-900 min-h-screen w-full font-mono px-4">
      <Input />
      <Todos />
    </main>
  );
}
