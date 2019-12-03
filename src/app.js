
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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

const NotFoundPage = () => (
  <div>
    404
  </div>
)

const Routes = (  
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashBoardPage} exact={true}/>
      <Route path="/create" component={AddExpensePage}/>
      <Route path="/edit" component={EditExpensePage}/>
      <Route path="/help" component={HelpPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(Routes , document.getElementById('root'));