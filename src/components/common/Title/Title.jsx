import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import propTypes from './propTypes';
import defaultProps from './defaultProps';
import styles from './style.css';

const Title = ({ teamName }) => {
	return (
		<div>
			<h1 className={styles.title}>TeamApp!</h1>
			{teamName ? <span>|</span> : null}
			{teamName ? <Link to="/board">{teamName}</Link> : null}
		</div>
	);
};

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
