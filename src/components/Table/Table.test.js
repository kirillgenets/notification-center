import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Table from './Table';

configure({
  adapter: new Adapter(),
});

it('Table renders correctly', () => {
  const tree = shallow(
    <Table />,
  );

  expect(tree).toMatchSnapshot();
});
