import React from 'react';
import {ExpenseListItem} from '../../components/ExpenseListItem';
import {shallow} from 'enzyme';

test('should render ExpenseListItem component properly', () => {
    const expense = {
        dipatch: {type: 'ADD_EVENT'},
        id: 10,
        edscr: 'Description',
        amount: 123.45,
        createdAt: 20281001
    }
    const wrapper = shallow( 
        <ExpenseListItem {...expense}/> );
    expect(wrapper).toMatchSnapshot();
} );