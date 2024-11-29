import { useForm } from "react-hook-form";
import { AddBudgetFormValues,budgetSchema } from "../zod/Schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { addBudget } from "../store/financeSlice";
import { toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
interface formData {
  amount: number;
  category: string;
}
const AddBudget = () => {
  const dispatch = useDispatch();
  let error = useSelector((state:any)=>state.finance.budgetError)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AddBudgetFormValues>({
    resolver: zodResolver(budgetSchema),
    defaultValues: {
      category: "",
    },
  });

  const onSubmit = (data: formData) => {
    const budget = {
      id: Date.now(),
      category: data.category,
      amount: data.amount,
    };
    dispatch(addBudget(budget));
    reset();
    if (error) {
      toast.dismiss("unique-error-id"); 
      toast.error(error, { toastId: "unique-error-id" });
      error=null

    }
  };
 
  return (
    <div className="w-full max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">Add Budget</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-1">
            Enter a catory
          </label>
          <input
            type="text"
            id="source"
            {...register("category")}
            className={`w-full border ${
              errors.category ? "border-red-500" : "border-gray-300"
            } px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400`}
            placeholder="e.g., job, freelance"
          />
          {errors.category && <p className="text-sm text-red-500 mt-1">{errors.category.message}</p>}
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
          {isSubmitting ? "Submitting..." : "Add Budget"}
        </button>
      </form>
    </div>
  );
};
export default AddBudget;
