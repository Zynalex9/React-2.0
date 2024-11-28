import { z } from "zod";

export const incomeSchema = z.object({
  source: z.string().min(1, "Income name is required"),
  amount: z
    .string() 
    .transform((val) => parseFloat(val)) 
    .refine((val) => !isNaN(val), { message: "Amount must be a valid number" }) 
});

export const budgetSchema = z.object({
  category: z.string().min(1, "Budget name is required"),
  amount: z
    .string()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val), { message: "Amount must be a valid number" })
});

export const expenseSchema = z.object({
  category: z.string().min(1, "Expense name is required"),
  amount: z
    .string()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val), { message: "Amount must be a valid number" })
});

export type AddExpensesFormValues = z.infer<typeof expenseSchema>;
export type AddBudgetFormValues = z.infer<typeof budgetSchema>;
export type AddIncomeFormValues = z.infer<typeof incomeSchema>;
