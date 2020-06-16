import React, { useEffect } from 'react';
import { NavLink as Link } from 'react-router-dom';
import propTypes from './propTypes';
import defaultProps from './defaultProps';
import styles from './Title.css';

const Title = ({ teamName }) => {
	return (
		<h1 className={styles.title}>
			TeamApp! {teamName ? ' | ' : null}
			{teamName ? (
				<Link className={styles['team-name']} to="/">
					{teamName}
				</Link>
			) : null}
		</h1>
	);
};

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
