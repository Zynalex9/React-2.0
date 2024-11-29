import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadFromLocalStorage } from "../utils/localStorage";
interface Income {
  id: number;
  source: string;
  amount: number;
}

interface Expense {
  id: number;
  category: string;
  amount: number;
}

interface Budget {
  id: number;
  category: string;
  amount: number;
}
interface FinanceState {
  incomes: Income[];
  expenses: Expense[];
  budget: Budget[];
  budgetError?: String | null;
  expenseError?: String | null;
}

const persistedState = loadFromLocalStorage<FinanceState>("financestate");
const initialState: FinanceState = persistedState || {
  incomes: [],
  expenses: [],
  budget: [],
  budgetError: null,
  expenseError: null,
};
const financeSlice = createSlice({
  name: "finances",
  initialState,
  reducers: {
    addIncome: (state, action: PayloadAction<Income>) => {
      state.incomes.push(action.payload);
      state.budgetError = null;
      state.expenseError = null;
    },
    addBudget: (state, action: PayloadAction<Budget>) => {
      const totalIncome = state.incomes.reduce(
        (sum, income) => sum + income.amount,
        0
      );
      const totalBudget = state.budget.reduce(
        (sum, budget) => sum + budget.amount,
        0
      );
      if (totalBudget + action.payload.amount > totalIncome) {
        console.log("Budget Exceding income");
        state.budgetError = "Budget Exceding income"
        state.expenseError= null
      } else {
        state.budget.push(action.payload);
        state.budgetError = null;
        state.expenseError = null;

      }
    },
    addExpense: (state, action: PayloadAction<Expense>) => {
      const totalIncome = state.incomes.reduce(
        (sum, income) => sum + income.amount,
        0
      );

      const totalExpense = state.expenses.reduce(
        (sum, expense) => sum + expense.amount,
        0
      );
      if (totalExpense + action.payload.amount > totalIncome) {
        console.log("Expense Exceding income");
        state.budgetError = null;
        state.expenseError="Expenses excedding income"
      } else {
        state.expenses.push(action.payload);
        state.expenseError = null;
        state.budgetError = null;

      }
    },
  },
});

export const { addBudget, addIncome, addExpense } = financeSlice.actions;
export default financeSlice.reducer;
