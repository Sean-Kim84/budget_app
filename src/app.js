
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
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
    404 - <Link to="/">Go home</Link>
  </div>
)

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
)

const Routes = (  
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
      <Route path="/" component={ExpenseDashBoardPage} exact={true}/>
      <Route path="/create" component={AddExpensePage}/>
      <Route path="/edit" component={EditExpensePage}/>
      <Route path="/help" component={HelpPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(Routes , document.getElementById('root'));