import { AddIncome, AddBudget, AddExpenses, TotalBudget, TotalIncome, TotalExpenses } from "./components";
export default function App() {
  return (
    <main>
      <div className="top w-full flex justify-between p-2 gap-2">
        <AddIncome />
        <AddBudget />
        <AddExpenses />
      </div>
      <div className="flex items-center justify-between w-full p-2 gap-2">
      <TotalIncome/>
      <TotalBudget/>
      <TotalExpenses/>
      </div>
    </main>
  );
}
