import React from 'react';
import uuid from 'uuid/v1';
import { Route, Switch } from 'react-router-dom';

const RoutesSwitcher = ({ routesData }) => {
	const renderRoutes = () => routesData.map((data) => <Route key={uuid()} {...data} />);

	return <Switch>{renderRoutes()}</Switch>;
};

RoutesSwitcher.propTypes = {};

export default RoutesSwitcher;
