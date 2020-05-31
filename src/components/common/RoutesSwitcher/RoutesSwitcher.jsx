import React from 'react';
import uuid from 'uuid/dist/v1';
import { Route, Switch } from 'react-router-dom';
import propTypes from './propTypes';

const RoutesSwitcher = ({ routesData }) => {
	const renderRoutes = () => routesData.map((data) => <Route key={uuid()} {...data} />);

	return <Switch>{renderRoutes()}</Switch>;
};

RoutesSwitcher.propTypes = propTypes;

export default RoutesSwitcher;
