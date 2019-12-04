import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense,removeExpense } from '../actions/expenses'
const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      <ExpenseForm 
        expense={props.expense} 
        onSubmit={(expense) => {
        props.dispatch(editExpense(props.expense.id, expense));
        props.history.push('/');
        console.log('update', expense)
      }}/>
      <button onClick={() => {
        props.dispatch(removeExpense({id: props.expense.id}));
        props.history.push('/');
      }}>Remove</button>
    </div>
  )
}

const mapStateToProps = (state, props) => { // 두번째 argument로 현재 component의 props 와도 연결할 수 있다
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id; // expense state의 주소 === router의 주소
    })
  }
}

export default connect(mapStateToProps)(EditExpensePage); 