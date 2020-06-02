import React from 'react';
import propTypes from './propTypes';
import RoutesSwitcher from '../../common/RoutesSwitcher';
import isObjectEmpty from './../../../utils/isObjectEmpty';
import SignUp from './../auth/SignUp';
import SignIn from '../auth/SignIn';
import Table from './../board/Table';

const AppRouter = ({ user, removeSignUpError }) => {
	const routesData = isObjectEmpty(user)
		? [
				{
					path: '/',
					component: SignUp,
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
		  ]
		: [
				{
					path: '/',
					component: Table,
					exact: true,
				},
		  ];

	return <RoutesSwitcher routesData={routesData} />;
};

AppRouter.propTypes = propTypes;

export default AppRouter;
