import React, { useState, useRef } from 'react';
import propTypes from './propTypes';
import styles from './AddComment.css';
import postData from './../../../../API/postData';
import { API_URL } from '../../../../store/constants';
import defaultProps from './defaultProps';

const AddComment = ({ teamId, taskId, user, onSubmit }) => {
	const [error, setError] = useState('');
	const inputRef = useRef(null);

	const postComment = async (message) => {
		await postData(`${API_URL}/Comments`, {
			text: message,
			taskId: Number(taskId),
			authorId: user.id,
			teamId,
		});
	};

	const handleFormSubmit = (evt) => {
		evt.preventDefault();

		const commentData = new FormData(evt.target);
		const message = commentData.get('comment-text');

		if (!message) {
			setError('A comment message can not be empty.');
			return;
		}

		postComment(message);
		inputRef.current.value = '';
		onSubmit({ text: message, authorId: user.id, authorLogin: user.login, taskId, teamId });
	};

	return (
		<form className={styles.wrapper} onSubmit={handleFormSubmit}>
			<textarea
				className={styles.input}
				ref={inputRef}
				name="comment-text"
				placeholder="Your comment message..."
			></textarea>
			{error ? <p className={styles.error}>{error}</p> : null}
			<button className={styles.submit} type="submit">
				Send!
			</button>
		</form>
	);
};

AddComment.propTypes = propTypes;
AddComment.defaultProps = defaultProps;

export default AddComment;
