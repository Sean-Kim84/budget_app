import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// const date = new Date();
const now = moment();  
console.log (now);
console.log(now.format('MMM Do, YYYY'));

class ExtenseForm extends React.Component {
  state = {
    description: '',
    amount: '',
    note: '',
    createdAt: moment(),
    calenderFocused: false
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }))
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if(amount.match(/^\d*(\.\d{0,2})?$/)){ // 소수점 둘째 자리까지만
      this.setState(() => ({ amount }))
    }  
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    // e.persist(); // setState시 note: e.target.value 를 사용하기위해 사용
    this.setState(() => ({ note }))
  };

  onDateChange = (createdAt) => {
    this.setState(() => ({ createdAt }))
  } 
  onFocusChange = ({ focused }) => {
    this.setState(() => ({calenderFocused: focused}))
  }

  render(){
    return (
      <div>
        <form>
          <input 
            type="text" 
            placeholder="Description"
            autoFocus 
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input 
            type='text'
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false} // 지난 날은 pick 불가
            
          />
          <textarea
            placeholder="Add a note for your expense"
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}

export default ExtenseForm;