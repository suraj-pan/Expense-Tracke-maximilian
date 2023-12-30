import './ExpenseItem.css';
import { Card } from '../UI/Card';
import { ExpenseDate } from './ExpenseDate';
import { useState } from 'react';
export const ExpenseItem = (props) => {

  const [title,setTitle]=useState(props.title);

  function clickHandler (){
    console.log("title change")
    setTitle("suraj")
  }

  
    return (
    <Card className="expense-item">
        <ExpenseDate date = {props.date} />
      <div className = "expense-item__description">
        <h2>{title}</h2>
        <div className ="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};