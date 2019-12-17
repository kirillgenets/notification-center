import React from 'react';
import renderer from 'react-test-renderer';
import ReadAll from './ReadAll';

it('ReadAll renders correctly', () => {
  const tree = renderer
    .create(
      <ReadAll />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
