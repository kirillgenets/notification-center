import React from 'react';
import renderer from 'react-test-renderer';
import Notifications from './Notifications';

it('Notifications render correctly', () => {
  const tree = renderer
    .create(
      <Notifications
        currentPage={1}
        requestNotifications={jest.fn()}
        notificationsToShow={[]}
      />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
