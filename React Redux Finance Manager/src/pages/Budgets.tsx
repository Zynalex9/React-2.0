import { useSelector } from "react-redux";

interface Budget {
    id: number;
    category: string;
    amount: number;
  }
const Budgets = () => {
  const budget =useSelector((state: any) => state.finance.budget);
  const totalBudget = budget.reduce((sum:number,budget:Budget)=> sum + budget.amount,0)
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Income List</h2>
      <table className="table-auto border-collapse w-full text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">S. No</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {budget.map((budget:Budget, index:number) => (
            <tr key={budget.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{budget.category.toUpperCase()}</td>
              <td className="border px-4 py-2">${budget.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="text-xl font-bold my-4">Total Budget: ${totalBudget} </h3>
    </div>
  );
};

export default Budgets;
