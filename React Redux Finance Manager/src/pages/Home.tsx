import {
    AddIncome,
    AddBudget,
    AddExpenses,
    TotalBudget,
    TotalIncome,
    TotalExpenses,
  } from "../components";

const Home = () => {
  return (
    <main className="bg-gray-100  p-4">
    <div className="top w-full flex justify-between gap-2">
      <TotalIncome />
      <TotalBudget />
      <TotalExpenses />
    </div>
    <div className="flex items-center justify-between w-full gap-2">
      <AddIncome />
      <AddBudget />
      <AddExpenses />
    </div>
  </main>
  )
}

export default Home
