import React from 'react';
import renderer from 'react-test-renderer';
import FilterRadio from './FilterRadio';
import { ReadStatusFilters } from '../../store/constants';

it('FilterRadio renders correctly', () => {
  const tree = renderer
    .create(
      <FilterRadio
        id="unread-radio"
        value={ReadStatusFilters.SHOW_UNREAD}
        name="read-status"
        description="Unread"
      />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
