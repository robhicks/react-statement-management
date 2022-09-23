/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Category from './Category'
import Accordion from '../common/Accordion'
import { reducer } from '../utils/'
import { useRecoilState } from 'recoil'
import budgetState from './budgetState'

const Categories = () => {
  const [budget] = useRecoilState(budgetState)
  const [incomeAmount, setIncomeAmount] = useState(0)
  const [expenseAmount, setExpenseAmount] = useState(0)

  useEffect(() => {
    setIncomeAmount(budget.currentBudget.categories.income.reduce((p, c) => reducer(p, c, budget.active), 0))
    setExpenseAmount(budget.currentBudget.categories.expense.reduce((p, c) => reducer(p, c, budget.active), 0))
  }, [budget.active, budget.currentBudget])

  return (
    <div className="">
      <Accordion amount={incomeAmount} border title="Income">
        <div className="h-1 mt-1 border-t border-gray-300"></div>
        {budget.currentBudget.categories.income.map((cat) =>
          <Category key={cat.id} category={cat} />
        )}
      </Accordion>
      <Accordion amount={expenseAmount} border title="Expense">
        <div className="h-1 mt-1 border-t border-gray-300"></div>
        {budget.currentBudget.categories.expense.map((cat) =>
          <Category key={cat.id} category={cat} />
        )}
      </Accordion>
    </div>
  )
}

export default Categories