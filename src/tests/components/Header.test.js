import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../components/HeaderPage';


// import ReactShallowRenderer from 'react-test-renderer/shallow';

// test('Header Page should be rendered properly', () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header />);
//     expect(renderer.getRenderOutput()).toMatchSnapshot();
// });

// import toJson from 'enzyme-to-json';

// test('Header Page should be rendered properly', () => {
//     const wrapper = shallow (<Header />);
//     expect(toJson(wrapper)).toMatchSnapshot();
// });

test('Header Page should be rendered properly', () => {
    const wrapper = shallow (<Header />);
    expect(wrapper).toMatchSnapshot();
});