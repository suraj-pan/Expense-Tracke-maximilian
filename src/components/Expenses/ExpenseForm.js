import React from 'react'

const ExpenseForm = () => {
  return (
    <div>
      <form>
        <div>
            <div>
                <label for="title">Title</label>
                <input type="text" id="title" placeholder='enter the Expense Name here' />
            </div>
            <div>
                <label for="amount">Amount</label>
                <input type="number" id="amount" placeholder='enter the Expense amount here' />
            </div>
            <div>
                <label for="date">Date</label>
                <input type="date" id="date" min="2020-01-01" max="2023-12-30" placeholder='enter the Expense date here' />
            </div>
        </div>
        <div>
            <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  )
}

export default ExpenseForm
