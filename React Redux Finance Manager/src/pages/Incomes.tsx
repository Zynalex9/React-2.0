import { useSelector } from "react-redux";
interface Income {
  amount: number;
  source: string;
  id: number
}
const Incomes = () => {
  const incomes = useSelector((state: any) => state.finance.incomes);
  const totalIncome = incomes.reduce((sum:number,income:Income)=> sum + income.amount,0)
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
          {incomes.map((income:Income, index:number) => (
            <tr key={income.id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{income.source.toUpperCase()}</td>
              <td className="border px-4 py-2">${income.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="text-xl font-bold my-4">Total Income: ${totalIncome} </h3>
    </div>
  );
};

export default Incomes;
