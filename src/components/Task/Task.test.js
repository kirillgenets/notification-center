import React from 'react';
import renderer from 'react-test-renderer';
import Task from './Task';

it('Read task renders correctly', () => {
  const tree = renderer
    .create(
      <Task category="WARN" text="This Session Is Running In Sandbox Mode. Changes Will Not Be Saved" isRead={true} />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('Unread task renders correctly', () => {
  const tree = renderer
    .create(
      <Task category="WARN" text="This Session Is Running In Sandbox Mode. Changes Will Not Be Saved" isRead={false} />,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
