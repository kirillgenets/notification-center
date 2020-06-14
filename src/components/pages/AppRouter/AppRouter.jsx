/* eslint-disable react/display-name */
import React from 'react';
import { Redirect } from 'react-router-dom';
import propTypes from './propTypes';
import RoutesSwitcher from '../../common/RoutesSwitcher';
import isObjectEmpty from './../../../utils/isObjectEmpty';
import SignUp from './../auth/SignUp';
import SignIn from '../auth/SignIn';
import Board from './../board/Board';
import TaskPageContainer from '../../../containers/TaskPageContainer';

const AppRouter = ({ user }) => {
	const isAuth = typeof user === 'object' && !isObjectEmpty(user);

	const routesData = isAuth
		? [
				{
					path: '/',
					component: Board,
					exact: true,
				},
				{
					path: '/task/:id',
					component: TaskPageContainer,
				},
				{
					path: '/sign-in',
					render: () => <Redirect to="/" />,
				},
				{
					path: '/sign-up',
					render: () => <Redirect to="/" />,
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
				{
					path: '/task/:id',
					render: () => <Redirect to="/" />,
				},
		  ];

	return <RoutesSwitcher routesData={routesData} />;
};

AppRouter.propTypes = propTypes;

export default AppRouter;
