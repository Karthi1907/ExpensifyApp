import React from 'react';
import NotFoundPage from '../../components/NotFoundPage';
import { shallow } from 'enzyme';

test('NotFoundPage rendering test case', () => {

    const wrapper = shallow( <NotFoundPage />);
    expect(wrapper).toMatchSnapshot();

})