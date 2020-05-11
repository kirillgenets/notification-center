import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Menu from './Menu';

configure({
  adapter: new Adapter(),
});

it('Menu renders correctly', () => {
  const tree = renderer
    .create(
      <Menu />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('Click handler works correctly', () => {
  const tree = shallow(
    <Menu />,
  );

  expect(tree).toMatchSnapshot();

  tree.find('button').simulate('click');

  expect(tree).toMatchSnapshot();
});
