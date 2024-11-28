import { createSlice } from "@reduxjs/toolkit";
import { loadFromLocalStorage } from "../utils/localStorage";
interface Income {
  id: string;
  source: string;
  amount: number;
}

interface Expense {
  id: string;
  description: string;
  category: string;
  amount: number;
}

interface Budget {
  id: string;
  category: string;
  amount: number;
}
interface FinanceState {
  incomes: Income[];
  expenses: Expense[];
  budget: Budget[];
}

const persistedState = loadFromLocalStorage<FinanceState>("financestate");
const initialState: FinanceState = persistedState || {
  incomes: [],
  expenses: [],
  budget: [],
};
const financeSlice = createSlice({
  name: "finances",
  initialState,
  reducers: {
    addIncome: (state, action) => {
      state.incomes.push(action.payload);
      console.log("Action: ", action);
    },
    addBudget: (state, action) => {
      state.budget.push(action.payload);
    },
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
  },
});

export const { addBudget, addIncome, addExpense } = financeSlice.actions;
export default financeSlice.reducer;
