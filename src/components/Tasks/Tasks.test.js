import React from 'react';
import renderer from 'react-test-renderer';
import Tasks from './Tasks';

it('Tasks render correctly', () => {
  const tree = renderer
    .create(<Tasks currentPage={1} requestTasks={jest.fn()} tasksToShow={[]} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
