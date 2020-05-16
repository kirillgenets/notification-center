import React from 'react';
import renderer from 'react-test-renderer';
import TableHeading from './TableHeading';

it('TableHeading renders correctly', () => {
	const tree = renderer.create(<TableHeading />).toJSON();

	expect(tree).toMatchSnapshot();
});
