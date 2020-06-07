import React, { useState, useEffect } from 'react';
import uuid from 'uuid/dist/v1';
import fetchData from './../../../../API/fetchData';
import { API_URL } from '../../../../store/constants';
import Comment from './../Comment';
import AddCommentContainer from '../../../../containers/AddCommentContainer';
import propTypes from './propTypes';
import styles from './Comments.css';

const Comments = ({ teamId, taskId }) => {
	const [commentsList, setCommentsList] = useState([]);

	const fetchCommentsList = async () => {
		const response = await fetchData(`${API_URL}/Comments`, { taskId, teamId });
		setCommentsList(response.data);
	};

	useEffect(() => {
		fetchCommentsList();
	}, []);

	const renderComments = () =>
		commentsList.map((comment) => (
			<Comment key={uuid()} author={comment.authorLogin} text={comment.text} />
		));

	const handleAddComment = ({ text, authorId, authorLogin, taskId, teamId }) => {
		setCommentsList([...commentsList, { text, authorId, authorLogin, taskId, teamId }]);
	};

	return (
		<div className={styles.wrapper}>
			<ul className={styles.list}>{renderComments()}</ul>
			<AddCommentContainer taskId={taskId} teamId={teamId} onSubmit={handleAddComment} />
		</div>
	);
};

Comments.propTypes = propTypes;

export default Comments;
