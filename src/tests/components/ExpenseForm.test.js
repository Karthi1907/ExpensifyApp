import React from 'react';
import ExpenseForm from '../../components/ExpenseForm';
import { shallow } from 'enzyme';
import { defaultTestExpenses } from '../fixtures/expenses';
import moment from 'moment';
const expenseOne = { id: 66,  amount: 100, descr: 'EBB Bill', createdAt: '20230701', comments: 'Nothing Nothing' };


test('ExpenseForm should be rendered correctly', () => {
    const wrapper = shallow( <ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('ExpenseForm should be rendered correctly - TC 2', () => {
   
    const wrapper = shallow( <ExpenseForm expense={expenseOne}/>);
    expect(wrapper).toMatchSnapshot();
}); 

test('ExpenseForm should be rendered correctly - TC 3 - Form Submit - No decsr/amount', () => {
    const wrapper = shallow( <ExpenseForm />);
    // expect(wrapper).toMatchSnapshot);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
}); 

test('should set descr(iption) on input text change', () => {
    const value = 'Test Description';
    const wrapper = shallow( <ExpenseForm />);
    // console.log(wrapper.find('input').at(0));
    // expect(wrapper).toMatchSnapshot);
    wrapper.find('input').at(0).simulate('change', {
        target : {value}
    });
    expect(wrapper.state('descr')).toBe(value);
    // expect(wrapper).toMatchSnapshot();
}); 

test('should set comments on input textarea change', () => {
    const value = 'Test Comments';
    const wrapper = shallow( <ExpenseForm />);
    // expect(wrapper).toMatchSnapshot);
    wrapper.find('textarea').simulate('change', {
        target : {value},
        persist: jest.fn()
    });
    expect(wrapper.state('comments')).toBe(value);
}); 

test('should set amount only if valid amount', () => {
    const value = '123.456';
    const wrapper = shallow( <ExpenseForm />);
    // expect(wrapper).toMatchSnapshot);
    wrapper.find('input').at(1).simulate('change', {
        target : {value}
    });
    expect(wrapper.state('amount')).toBe('0.00');
}); 

test('should set amount only if valid amount', () => {
    const value = '123.45';
    const wrapper = shallow( <ExpenseForm />);
    // expect(wrapper).toMatchSnapshot);
    wrapper.find('input').at(1).simulate('change', {
        target : {value}
    });
    expect(wrapper.state('amount')).toBe(value);
}); 

test(' should call submit prop for valid form submission ', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenseOne} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        amount: 100, descr: 'EBB Bill', createdAt: '20230701', comments: 'Nothing Nothing'
    });
});

test(' should check SingleDatePicker onDateChange is successful ', () => {
  console.log('should check SingleDatePicker onDateChange is successful');
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);  
});

test(' should check SingleDatePicker onFocusChange is successful ', () => {
    const calendarFocused = false;
    console.log('should check SingleDatePicker onFocusChange is successful');
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused: calendarFocused});
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);  
  });