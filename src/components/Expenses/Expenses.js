import { ExpenseItem } from "./ExpensesItem";
import { Card } from "../UI/Card";
import './Expenses.css'



export const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map(expense=>{
     return <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    })}
    </Card>
  );
};