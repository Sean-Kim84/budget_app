import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    <p>{props.filters.text}</p>
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense} />
    })}
  </div>
);

const mapStateToProps = (state) => { // store에 있는 어떤 info를 가져올건지
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseList);
