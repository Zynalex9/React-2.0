import { z } from "zod";
export const incomeSchema = z.object({
  source: z.string().min(1, "Income name is required"),
  amount: z
    .number({ invalid_type_error: "Amount must be a number" })
    .positive("Amount should be greater than 0"),
});


export const budgetSchema = z.object({
  source: z.string().min(1, "Budget name is required"),
  amount: z
    .number({ invalid_type_error: "Amount must be a number" })
    .positive("Amount should be greater than 0"),
});


export const expenseSchema = z.object({
  source: z.string().min(1, "Expense name is required"),
  amount: z
    .number({ invalid_type_error: "Amount must be a number" })
    .positive("Amount should be greater than 0"),
});
export type AddExpensesFormValues = z.infer<typeof expenseSchema>;
export type AddBudgetFormValues = z.infer<typeof budgetSchema>;
export type AddIncomeFormValues = z.infer<typeof incomeSchema>;
