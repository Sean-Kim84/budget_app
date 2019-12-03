
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashBoardPage =  () => (
  <div>
    This is for test
  </div>
);

const AddExpensePage =  () => (
  <div>
    This is for second
  </div>
);

const EditExpensePage = () => (
  <div>
    This is for third
  </div>
)

const HelpPage = () => (
  <div>
    This is for Help
  </div>
)

const Routes = (  
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashBoardPage} exact={true}/>
      <Route path="/create" component={AddExpensePage}/>
      <Route path="/edit" component={EditExpensePage}/>
      <Route path="/help" component={HelpPage}/>
    </div>
  </BrowserRouter>
);

ReactDOM.render(Routes , document.getElementById('root'));