import React from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import propTypes from './propTypes';
import RoutesSwitcher from '../../common/RoutesSwitcher';
import isObjectEmpty from './../../../utils/isObjectEmpty';
import SignUp from './../auth/SignUp';
import SignIn from '../auth/SignIn';
import Board from './../board/Board';
import TaskPageContainer from '../../../containers/TaskPageContainer';

const AppRouter = ({ user }) => {
	const history = useHistory();
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
					// eslint-disable-next-line react/display-name
					render: () => <Redirect to="/" />,
				},
		  ];

	if (isAuth && history.location.pathname !== '/') {
		history.push('/');
	}

	return <RoutesSwitcher routesData={routesData} />;
};

AppRouter.propTypes = propTypes;

export default AppRouter;
