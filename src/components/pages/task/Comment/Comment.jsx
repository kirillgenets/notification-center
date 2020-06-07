import React from 'react';
import propTypes from './propTypes';
import styles from './Comment.css';

const Comment = ({ author, text }) => {
	return (
		<li className={styles.wrapper}>
			<p className={styles.text}>{text}</p>
			<div className={styles.author}>{author}</div>
		</li>
	);
};

Comment.propTypes = propTypes;

export default Comment;
