import { useForm } from "react-hook-form";
import { AddIncomeFormValues, incomeSchema } from "../zod/Schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { addIncome } from "../store/financeSlice";

interface formData {
  amount: number;
  source: string;
}

const AddIncomeComp = () => {
  const dispatch = useDispatch();
  const incomes = useSelector((state: any) => state.finance.incomes);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AddIncomeFormValues>({
    resolver: zodResolver(incomeSchema),
    defaultValues: {
      source: "",
    },
  });

  const onSubmit = (data: formData) => {
    const Income = {
      id: Date.now(),
      source: data.source,
      amount: data.amount,
    };
    dispatch(addIncome(Income));
    console.log(incomes);
    reset();
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">Add Income</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-1">
            Enter a Source
          </label>
          <input
            type="text"
            id="source"
            {...register("source")}
            className={`w-full border ${
              errors.source ? "border-red-500" : "border-gray-300"
            } px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400`}
            placeholder="e.g., job, freelance"
          />
          {errors.source && <p className="text-sm text-red-500 mt-1">{errors.source.message}</p>}
        </div>

        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
            Amount ($)
          </label>
          <input
            type="number"
            id="amount"
            {...register("amount")}
            className={`w-full border ${
              errors.amount ? "border-red-500" : "border-gray-300"
            } px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400`}
            placeholder="e.g., 1000"
          />
          {errors.amount && <p className="text-sm text-red-500 mt-1">{errors.amount.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Add Income"}
        </button>
      </form>
    </div>
  );
};

export default AddIncomeComp;
