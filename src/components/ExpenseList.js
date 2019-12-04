import React from 'react';
import {connect} from 'react-redux';

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    <p>{props.filters.text}</p>
    <p>{props.expenses.length}</p>
  </div>
);

const mapStateToProps = (state) => { // store에 있는 어떤 info를 가져올건지
  return {
    expenses: state.expenses,
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseList);
