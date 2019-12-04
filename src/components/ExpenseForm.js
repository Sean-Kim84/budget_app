import React from 'react';

class ExtenseForm extends React.Component {
  state = {
    description: '',
    amount: '',
    note: ''
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
          <input />
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