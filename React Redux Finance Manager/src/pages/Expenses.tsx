import { useSelector } from "react-redux";
interface Expense {
    id: number;
    category: string;
    amount: number;
  }
const Expenses = () => {
  const Expenses = useSelector((state: any) => state.finance.expenses);
  const totalExpenses = Expenses.reduce((sum:number,expense:Expense)=> sum + expense.amount,0)
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
          {Expenses.map((expense:Expense, index:number) => (
            <tr key={expense.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{expense.category.toUpperCase()}</td>
              <td className="border px-4 py-2">${expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="text-xl font-bold my-4">Total Expense: ${totalExpenses} </h3>
    </div>
  );
};

export default Expenses;
