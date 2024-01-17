import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setFilterText, sortByAmount } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
console.log(store.getState());

store.dispatch(addExpense(
    {
        descr: 'Water Bill',
        amount: 300.25,
        createdAt: 20240701
    }
));

store.dispatch(addExpense(
    {
        descr: 'Gas Bill',
        amount: 1200,
        createdAt: 20240101
    }
));

store.dispatch(addExpense(
    {
        descr: 'EB Bill',
        amount: 300.35,
        createdAt: 20240601
    }
));

// store.dispatch(setFilterText( 'Gas' ));

store.dispatch(sortByAmount());

// setTimeout( () => {
//     store.dispatch(setFilterText( 'Bill' ))
// }, 3000);

const state = store.getState();

console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
    <div> 
        <Provider store={store}> 
            <AppRouter />
        </Provider>
    </div>
)

ReactDOM.render(jsx, document.getElementById('app'));
