import React from 'react';
import { ExpenseList } from "../../components/ExpenseList";
import { shallow } from 'enzyme';
import defaultTestExpenses from '../fixtures/expenses';

test( 'ExpenseList should be rendered properly', () => {
    const wrapper = shallow(<ExpenseList expenses={defaultTestExpenses} />);
    expect(wrapper).toMatchSnapshot();
} );

test( 'ExpenseList should be rendered properly', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
} );