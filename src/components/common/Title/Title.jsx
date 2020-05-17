import React from 'react';
import propTypes from './propTypes';
import defaultProps from './defaultProps';
import styles from './Title.css';

const Title = ({ teamName }) => {
	return (
		<h1 className={styles.title}>
			TeamApp! {teamName ? ' | ' : null}
			{teamName ? (
				<a className={styles['team-name']} href="/board">
					{teamName}
				</a>
			) : null}
		</h1>
	);
};

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
