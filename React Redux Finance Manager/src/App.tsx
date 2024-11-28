import { AddIncome, AddBudget, AddExpenses } from "./components";
export default function App() {
  return (
    <main>
      <div className="top w-full flex justify-between p-2 gap-2">
        <AddIncome />
        <AddBudget />
        <AddExpenses />
      </div>
    </main>
  );
}
