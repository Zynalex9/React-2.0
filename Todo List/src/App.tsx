import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Todos from "./components/Todos";

export default function App() {
  return (
   <main className="bg-slate-900">
   <Header/>
   <div className="main-container w-full flex gap-5">
   <SideBar/>
   <Todos/>
   </div>
   </main>
  )
}