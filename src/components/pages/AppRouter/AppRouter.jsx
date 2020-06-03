import React from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from './propTypes';
import RoutesSwitcher from '../../common/RoutesSwitcher';
import isObjectEmpty from './../../../utils/isObjectEmpty';
import SignUp from './../auth/SignUp';
import SignIn from '../auth/SignIn';
import Table from './../board/Table';

const AppRouter = ({ user }) => {
	const history = useHistory();
	const isAuth = typeof user === 'object' && !isObjectEmpty(user);

	if (isAuth) {
		history.push('/');
	}

	const routesData = isAuth
		? [
				{
					path: '/',
					component: Table,
					exact: true,
				},
		  ]
		: [
				{
					path: '/',
					component: SignIn,
					exact: true,
				},
				{
					path: '/sign-in',
					component: SignIn,
				},
				{
					path: '/sign-up',
					component: SignUp,
				},
		  ];

	return <RoutesSwitcher routesData={routesData} />;
};

AppRouter.propTypes = propTypes;

export default AppRouter;
