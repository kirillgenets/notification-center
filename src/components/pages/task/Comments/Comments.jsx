import React, { useState, useEffect } from 'react';
import uuid from 'uuid/dist/v1';
import fetchData from './../../../../API/fetchData';
import { API_URL } from '../../../../store/constants';
import Comment from './../Comment';
import propTypes from './propTypes';
import styles from './Comments.css';

const Comments = ({ taskId }) => {
	const [commentsList, setCommentsList] = useState([]);

	const fetchCommentsList = async () => {
		const response = await fetchData(`${API_URL}/Comments`, { taskId });
		setCommentsList(response.data);
	};

	useEffect(() => {
		fetchCommentsList();
	}, []);

	const renderComments = () =>
		commentsList.map((comment) => (
			<Comment key={uuid()} author={comment.authorLogin} text={comment.text} />
		));

	return <div>{renderComments()}</div>;
};

Comments.propTypes = propTypes;

export default Comments;
