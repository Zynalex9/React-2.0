import { useSelector } from "react-redux";

const totalIncome = () => {
    const incomes = useSelector((state: any) => state.finance.incomes);
    const totalIncome = incomes.reduce((sum: number, income: any) => sum + income.amount, 0);

  return (
    <div>
      <h3>Total Income: {totalIncome}</h3>
    </div>
  );
};

export default totalIncome;
