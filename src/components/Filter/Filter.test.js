import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Filter from './Filter';

configure({
  adapter: new Adapter(),
});

it('Filter renders correctly', () => {
  const tree = shallow(
    <Filter
      setCategoryFilter={jest.fn()}
      setReadStatusFilter={jest.fn()}
    />,
  );

  expect(tree).toMatchSnapshot();
});
