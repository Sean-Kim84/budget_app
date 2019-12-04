import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// const date = new Date();
const now = moment();  
console.log (now);
console.log(now.format('MMM Do, YYYY'));

class ExtenseForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calenderFocused: false,
      error: ''
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }))
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){ // 소수점 둘째 자리까지만
      this.setState(() => ({ amount }))
    }  
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    // e.persist(); // setState시 note: e.target.value 를 사용하기위해 사용
    this.setState(() => ({ note }))
  };

  onDateChange = (createdAt) => {
    if(createdAt) {
      this.setState(() => ({ createdAt }))
    }
  } 
  onFocusChange = ({ focused }) => {
    this.setState(() => ({calenderFocused: focused}))
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(!this.state.description || !this.state.amount){
      // set error state equal to 'Please Provide description and amount'
      this.setState(() => ({
        error: 'Please Provide description and amount'
      }))
    } else { 
      this.setState(() => ({
        error: ''
      }))
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount,10) * 100,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf()
      }) 
    }

  }

  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
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