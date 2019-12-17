import React from 'react';
import renderer from 'react-test-renderer';
import HeadingColumn from './HeadingColumn';

it('HeadingColumn renders correctly', () => {
  const tree = renderer
    .create(
      <HeadingColumn name="Category" />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
