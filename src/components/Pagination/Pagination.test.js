import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from './Pagination';

it('Pagination renders correctly', () => {
  const tree = renderer
    .create(
      <Pagination
        setCurrentPage={jest.fn()}
        currentPage={1}
      />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
