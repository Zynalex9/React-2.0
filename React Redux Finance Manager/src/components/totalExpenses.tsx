import { useSelector } from "react-redux";
import { BsGraphUpArrow } from "react-icons/bs";

const totalExpenses = () => {
  const incomes = useSelector((state: any) => state.finance.expenses);
  const totalExpenses = incomes.reduce(
    (sum: number, expense: any) => sum + expense.amount,
    0
  );

  return (
    <div className="shadow-md rounded-lg p-6 bg-white w-full md:w-1/3">
      <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">
        Total Expense
      </h3>
      <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center space-x-3">
          <BsGraphUpArrow size={32} color="green" />
          <span className="text-lg font-medium text-gray-600">Expenses: </span>
        </div>
        <p className="text-xl font-semibold text-gray-700">
          ${totalExpenses.toLocaleString()}
        </p>
      </div>
    </div>
  );
};


export default totalExpenses
