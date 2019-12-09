import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({id: '123ass'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123ass'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('1234abc', { note: 'New note value' })
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '1234abc',
    updates: {
      note: 'New note value'
    }
  })
})

test('should setup add expense action object', () => {
  const expenseData = {
    description: 'Seankim',
    note: "this is sean",
    amount: 18,
    createdAt: 0,
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id:expect.any(String)
        
    }
  })  
})

test('should setup expense action object with default value', () => {
  const action = addExpense({});
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});