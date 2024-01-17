import React from 'react';
import { shallow } from 'enzyme';
import  defaultTestExpenses  from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let editExpense, history, wrapper, removeExpense;

beforeEach( () => {
   editExpense = jest.fn();
   removeExpense = jest.fn();
   history = { push: jest.fn() };
   wrapper = shallow (
        <EditExpensePage 
            editExpense={editExpense} 
            removeExpense={removeExpense}
            history={history} 
            expense={defaultTestExpenses[2]} 
        />
    );
} );

test('Edit Expense Page should be rendered properly', () =>{
    expect(wrapper).toMatchSnapshot();
} );

test('Edit Expense Page should be rendered properly - testing editExpense functionality', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')({...defaultTestExpenses[2]});
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(editExpense).toHaveBeenLastCalledWith( defaultTestExpenses[2].id,  {...defaultTestExpenses[2]});
} );

test('Edit Expense Page should be rendered properly - testing remove expense functionality', () => {

    wrapper.find('button').simulate('click', {
        preventDefault: () => {}
    });
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(removeExpense).toHaveBeenLastCalledWith( defaultTestExpenses[2].id);
} );