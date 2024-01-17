import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from '../components/HomePage';
import ConnectedAddExpensePage  from '../components/AddExpensePage';
import ConnectedExoensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import Header from '../components/HeaderPage';
import NotFoundPage from '../components/NotFoundPage';   
  
 const AppRouter = () => (
    <BrowserRouter>
    <div>
      <Header /> 
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={ConnectedAddExpensePage} />
        <Route path="/edit/:id" component={ConnectedExoensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
      </div>
    </BrowserRouter>
  );

  export default AppRouter;