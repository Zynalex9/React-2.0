import { useSelector } from "react-redux";
import { HiOutlineCollection } from "react-icons/hi";


const totalBudget = () => {
  const budgets = useSelector((state: any) => state.finance.budget);
  const totalBudget = budgets.reduce(
    (sum: number, budget: any) => sum + budget.amount,
    0
  );
  console.log("total budget", totalBudget);
  return (
    <div className="shadow-md rounded-lg bg-white w-1/3  p-6">
      <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">
        Total Budget
      </h3>
      <div className="flex bg-gray-50 items-center justify-between p-4 rounded-lg">
        <div className="flex items-center space-x-3">
          <HiOutlineCollection size={32} color="green"/>
          <span className="text-lg font-medium text-gray-700">Budget:</span>
        </div>
        <p className="text-xl font-semibold text-gray-700">{totalBudget ? `$${totalBudget}` : "No Added Budget yet"}</p>
      </div>
    </div>
  );
};

export default totalBudget;
