import { useSelector } from "react-redux";
import { FcMoneyTransfer } from "react-icons/fc";

const TotalIncome = () => {
  const incomes = useSelector((state: any) => state.finance.incomes);
  const totalIncome = incomes.reduce(
    (sum: number, income: any) => sum + income.amount,
    0
  );

  return (
    <div className="shadow-md rounded-lg p-6 bg-white w-1/3">
      <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">
        Total Income
      </h3>
      <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center space-x-3">
          <FcMoneyTransfer size={32} />
          <span className="text-lg font-medium text-gray-600">Income: </span>
        </div>
        <p className="text-xl font-semibold text-gray-700">
          ${totalIncome.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default TotalIncome;
