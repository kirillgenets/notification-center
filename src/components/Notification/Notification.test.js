import React from 'react';
import renderer from 'react-test-renderer';
import Notification from './Notification';

it('Read notification renders correctly', () => {
  const tree = renderer
    .create(
      <Notification
        category="WARN"
        text="This Session Is Running In Sandbox Mode. Changes Will Not Be Saved"
        isRead={true}
      />
    )
    .toJSON();
  
    expect(tree).toMatchSnapshot();
});

it('Unread notification renders correctly', () => {
  const tree = renderer
    .create(
      <Notification
        category="WARN"
        text="This Session Is Running In Sandbox Mode. Changes Will Not Be Saved"
        isRead={false}
      />
    )
    .toJSON();
  
    expect(tree).toMatchSnapshot();
});
