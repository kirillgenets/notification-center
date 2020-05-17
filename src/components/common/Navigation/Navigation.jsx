import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink as Link } from 'react-router-dom';
import uuid from 'uuid/v1';
import propTypes from './propTypes';
import defaultProps from './defaultProps';
import styles from './style.css';

const Navigation = ({ routesData }) => {
	const renderRoutes = () =>
		routesData.map(({ path, component }) => (
			<Route key={uuid()} path={path} component={component} />
		));

	const renderItems = () =>
		routesData.map(({ path, title }) => (
			<li key={uuid()} className={styles.item}>
				<Link className={styles.link} to={path}>
					{title}
				</Link>
			</li>
		));

	return (
		<Router>
			<nav className={styles.wrapper}>
				<ul className={styles.list}>{renderItems()}</ul>
			</nav>
			<Switch>{renderRoutes()}</Switch>
		</Router>
	);
};

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;

export default Navigation;
