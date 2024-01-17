import React from 'react';
import { shallow } from 'enzyme';
import  defaultTestExpenses  from '../fixtures/expenses';
import { AddExpensePage } from '../../components/AddExpensePage';

let onSubmit, history, wrapper;

beforeEach( () => 
    {
    onSubmit = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow( <AddExpensePage onSubmit={onSubmit} history={history} />);
    
    }
);

test('AddExpensePage should be rendered correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('AddExpensePage should be rendered correctly - TC 2', () => {
    const onSubmit = jest.fn();
    const history = { push: jest.fn() }
    const wrapper = shallow( <AddExpensePage onSubmit={onSubmit} history={history} />);
    wrapper.find('ExpenseForm').prop('onSubmit')(defaultTestExpenses[0]);
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(onSubmit).toHaveBeenLastCalledWith(defaultTestExpenses[0]);
});
