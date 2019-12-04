import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter} from './actions/filters';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();


store.dispatch(addExpense({description: 'Water bill'}));
store.dispatch(addExpense({description: 'Gate bill'}));
store.dispatch(setTextFilter('water'));
console.log(store.getState());
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
) 

 
ReactDOM.render(jsx, document.getElementById('root'));