import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

export const ExpenseListItem = ( {dispatch, id, descr, amount,  createdAt } ) => (

    <div>
        <Link to={`/edit/${id}`} >
            <h3>  {descr}    </h3>
        </Link>
        <p>  {amount} - {createdAt} </p> 
        <button onClick={(e) => {
            dispatch( removeExpense(id) );
        }}>Remove me </button>
        
    </div>

);

const ConnectedExpenseListItem = connect()(ExpenseListItem);

export default ConnectedExpenseListItem;

