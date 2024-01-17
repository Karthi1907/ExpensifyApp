import React from 'react';
import ExpenseDashboardPage from '../../components/HomePage';
import { shallow } from 'enzyme';

test('HomePage rendering test case', () => {

    const wrapper = shallow( <ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();

})
