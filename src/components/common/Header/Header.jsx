import React from 'react';
import propTypes from './propTypes';
import Title from '../Title';
import Navigation from '../Navigation';
import styles from './Header.css';
import isObjectEmpty from '../../../utils/isObjectEmpty';

const Header = ({ user }) => {
	const isAuth = typeof user === 'object' && !isObjectEmpty(user);
	const routesData = isAuth
		? [
				{
					title: 'Tasks',
					path: '/',
				},
				{
					title: 'Add Task',
					path: '/add-task',
				},
				{
					title: 'Logout',
					path: '/logout',
				},
		  ]
		: [
				{
					title: 'Sign In',
					path: '/sign-in',
				},
				{
					title: 'Sign Up',
					path: '/sign-up',
				},
				{
					title: 'Create a Team',
					path: '/create-team',
				},
		  ];

	return (
		<header className={styles.header}>
			<Title />
			<Navigation routesData={routesData} />
		</header>
	);
};

Header.propTypes = propTypes;

export default Header;
