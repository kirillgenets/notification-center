import React from 'react';
import Title from '../Title';
import Navigation from '../Navigation';
import styles from './Header.css';

const Header = () => (
	<header className={styles.header}>
		<Title />
		<Navigation
			routesData={[
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
			]}
		/>
	</header>
);

export default Header;
