import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses'; 

// const EditExpensePage = (props) => 
// (
//     <div>
//       <ExpenseForm 
//         expense={props.expense}
//         onSubmit={ (expense) => {
//             props.dispatch( editExpense ( props.expense.id , {...expense} ) );
//             props.history.push('/');
//         } }
//       />
//       <button onClick={ (e) => {
//            props.dispatch( removeExpense (props.expense.id) );
//            props.history.push('/');       
//       }}>
//           Remove
//       </button>
//       <Link to="/"> Go Home </Link>
//       {/* <p> { props.expense.descr } </p> */}
//     </div>
//   );

export class EditExpensePage extends React.Component {

  editExpense = ( expense ) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  removeExpense = ( e ) => {
    e.preventDefault();
    this.props.removeExpense( this.props.expense.id );
    this.props.history.push('/');
  };

  render() {
    return (
     <div>
       <ExpenseForm  expense={this.props.expense} onSubmit={ this.editExpense }
       />
       <button onClick={ this.removeExpense }> Remove </button>
       <Link to="/"> Go Home </Link>
       {/* <p> { props.expense.descr } </p> */}
     </div>      
    );
  };
};


const mapStateToProps = ( state , props ) => {
    return {
      expense: state.expenses.find( (expense) => expense.id === props.match.params.id )
    };
};

const mapDispatchToProps = ( dispatch ) => {
  return {
    editExpense: (id, expense ) => dispatch(editExpense(  id, {...expense}) ),
    removeExpense: ( id) => dispatch(removeExpense( id )) 
  }
} 

const ConnectedExoensePage = connect(mapStateToProps, mapDispatchToProps)( EditExpensePage );  

export default ConnectedExoensePage;     