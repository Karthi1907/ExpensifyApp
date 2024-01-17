import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

/* Version 1 - Below version is difficult to test via TestSpies; hence changing to a version using mapDispatchToProps */

// const AddExpensePage = (props) => (
//     <div>
//         <ExpenseForm 
//           onSubmit={ ( expense ) => {
//             props.dispatch( addExpense(expense) );
//             props.history.push('/');
//           }} />
//       <Link to="/"> Go Home </Link>
//     </div>
//   );

// const ConnectedAddExpensePage = connect()(AddExpensePage);

/* Version 2 - Changes to use mapDispatchToProps */

// const AddExpensePage = (props) => (
//   <div>
//     <h1> Add Expense Form </h1>
//     <ExpenseForm onSubmit={ (expense) => {
//           props.onSubmit(expense);
//           props.history.push('/');        
//         } 
//       }
//     />
//   </div>
// );

/* Version 3 - AddExpensePage can be changed into a class based component so that we no longer have to define the 
  onSubmit() function inline. */

export class AddExpensePage extends React.Component {
  
  onSubmit = ( expense ) => {
    this.props.onSubmit(expense);
    this.props.history.push('/');
  }
 
  render() {
    return (
    <div>
      <h1> Add Expense Form </h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDipatchToProps = ( dispatch ) => ( { onSubmit: (expense) => dispatch(addExpense(expense) ) } );

const ConnectedAddExpensePage = connect(undefined, mapDipatchToProps)(AddExpensePage);

export default ConnectedAddExpensePage;