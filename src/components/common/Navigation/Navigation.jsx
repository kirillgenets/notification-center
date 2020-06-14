import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import uuid from 'uuid/dist/v1';
import propTypes from './propTypes';
import styles from './Navigation.css';

const Navigation = ({ routesData }) => {
	const renderItems = () =>
		routesData.map(({ path, title, action }) => {
			return (
				<li key={uuid()} className={styles.item}>
					{action ? (
						<button className={styles.link} onClick={action}>
							{title}
						</button>
					) : (
						<Link className={styles.link} to={path}>
							{title}
						</Link>
					)}
				</li>
			);
		});

	return (
		<React.Fragment>
			<nav className={styles.wrapper}>
				<ul className={styles.list}>{renderItems()}</ul>
			</nav>
		</React.Fragment>
	);
};

Navigation.propTypes = propTypes;

export default Navigation;
