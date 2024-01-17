import React from 'react';
import { shallow } from 'enzyme';
import  defaultTestExpenses  from '../fixtures/expenses';
import  defaultTestFilters  from '../fixtures/filters';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import moment from 'moment';

let setStartDate, setEndDate, sortByAmount, sortByDate, setAscendingOrder, setDescendingOrder, setFilterText, wrapper; //, wrapper1, wrapper2, wrapper3;

beforeEach( () => {
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setFilterText = jest.fn();
    setAscendingOrder = jest.fn();
    setDescendingOrder = jest.fn();
    wrapper = shallow( <ExpenseListFilters 
                            filters={defaultTestFilters[0]}
                            setAscendingOrder={setAscendingOrder}
                            setDescendingOrder={setDescendingOrder}
                            sortByAmount={sortByAmount}
                            sortByDate={sortByDate}
                            setFilterText={setFilterText}
                            setStartDate={setStartDate}
                            setEndDate={setEndDate}
                        /> 
    );
    // wrapper1 = shallow( <ExpenseListFilters 
    //         filters={defaultTestFilters[2]}
    //         setAscendingOrder={setAscendingOrder}
    //         setDescendingOrder={setDescendingOrder}
    //         sortByAmount={sortByAmount}
    //         sortByDate={sortByDate}
    //         setFilterText={setFilterText}
    //         setStartDate={setStartDate}
    //         setEndDate={setEndDate}
    //     />  
    // );
    // wrapper3 = shallow( <ExpenseListFilters 
    //         filters={defaultTestFilters[1]}
    //         setAscendingOrder={setAscendingOrder}
    //         setDescendingOrder={setDescendingOrder}
    //         sortByAmount={sortByAmount}
    //         sortByDate={sortByDate}
    //         setFilterText={setFilterText}
    //         setStartDate={setStartDate}
    //         setEndDate={setEndDate}
    //     />  
    // );        
} );

test('ExpenseListFilters page rendernig test for filters[0]' , () => {
    expect(wrapper).toMatchSnapshot();
});

test('ExpenseListFilters page rendernig test for filters[2]' , () => {
    wrapper.setProps({
        filters: defaultTestFilters[2]
    });
    expect(wrapper).toMatchSnapshot();
});

test('ExpenseListFilters page rendernig test for filters[1]' , () => {
    wrapper.setProps({
        filters: defaultTestFilters[1]
    });
    expect(wrapper).toMatchSnapshot();
});

test('ExpenseListFilters page rendernig test for filters[3]' , () => {
    wrapper.setProps({
        filters: defaultTestFilters[3]
    });
    expect(wrapper).toMatchSnapshot();
});

test('ExpenseListFilters page - handling text change test case ' , () => {
    wrapper.setProps({
        filters: defaultTestFilters[3]
    });
    const value = 'b';
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    });
    expect(setFilterText).toHaveBeenLastCalledWith(value);
});

test('ExpenseListFilters page - handling sortByDate change test case ' , () => {
    const value = 'date';
    wrapper.find('select').at(0).simulate('change', {
        target: {value}
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('ExpenseListFilters page - handling sortByAmount change test case ' , () => {
    const value = 'amount';
    wrapper.find('select').at(0).simulate('change', {
        target: {value}
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('ExpenseListFilters page - handling setAscendingOrder change test case ' , () => {
    const value = 'asc';
    wrapper.find('select').at(1).simulate('change', {
        target: {value}
    });
    expect(setAscendingOrder).toHaveBeenCalled();
});

test('ExpenseListFilters page - handling setDescendingOrder change test case ' , () => {
    const value = 'desc';
    wrapper.find('select').at(1).simulate('change', {
        target: {value}
    });
    expect(setDescendingOrder).toHaveBeenCalled();
});

test('ExpenseListFilters page - handling setStartDate/setEndDate test case ' , () => {
    const startDate = moment().startOf('year');
    const endDate = moment().add(7, 'months');
    wrapper.find('DateRangePicker').prop('onDatesChange')( {startDate, endDate} );
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('ExpenseListFilters page - handling focus change test case ' , () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused );
    expect(wrapper.state('calendarFocusedInput')).toBe(calendarFocused);
});