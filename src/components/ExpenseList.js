import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (

    <div>
        <h3>
            Expense List
        </h3>
        <p> Matching Expenses: {props.expenses.length} </p>
        {/* <p> {props.filters.text} </p> */}
        {/* { props.expenses.map( (expense)  => 
            {
                return ( <ExpenseListItem key={expense.id} {...expense} /> );
            } ) 
        }; */}

        { props.expenses.length === 0   
            ? ( <p>  No expenses to show </p> )  
            : ( props.expenses.map( (expense)  => 
                <ExpenseListItem key={expense.id} {...expense} /> ) )
        }

        {/* { props.expenses.map( (expense)  =>  <ExpenseListItem key={expense.id} {...expense} /> )}; */}
           
        
    </div>
);

const mapStateToProps = (state) => {
    return {
        // expenses : state.expenses, filters : state.filters
        expenses: getExpenses(state.expenses, state.filters)

    }
};

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

// const ConnectedExpenseList = connect( (state) => {
//     return {
//         expenses: state.expenses,
//         filters: state.filters
//     };
// } )(ExpenseList);

export default ConnectedExpenseList;

