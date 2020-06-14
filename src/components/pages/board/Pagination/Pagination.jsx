import React, { useEffect, useState } from 'react';
import uuid from 'uuid/dist/v1';
import classNames from 'classnames';
import fetchData from '../../../../API/fetchData';
import { TASKS_PER_PAGE, API_URL } from '../../../../store/constants';
import styles from './Pagination.css';
import propTypes from './propTypes';

const Pagination = ({
	categoryFilter,
	completionStatusFilter,
	tasks,
	setCurrentPage,
	currentPage,
	teamId,
}) => {
	const [pages, setPages] = useState([]);

	const SHOWN_PAGES_COUNT = 5;
	const lastPage = pages[pages.length - 1];

	const fetchPages = async () => {
		const response = await fetchData(`${API_URL}/Tasks`, { page: 1, showAll: true, teamId });

		setPages(() =>
			Array.from(
				{
					length: Math.ceil(response.data.length / TASKS_PER_PAGE),
				},
				(item, index) => index + 1
			)
		);
	};

	useEffect(() => {
		fetchPages();
	}, [categoryFilter, completionStatusFilter, tasks.length, teamId]);

	const handlePageClick = (page) => (evt) => {
		evt.preventDefault();

		if (page < 1 || page > pages.length) return;

		setCurrentPage(page);
	};

	const renderPaginationItem = (number) => (
		<li
			key={uuid()}
			className={classNames(styles.item, { [styles.current]: currentPage === number })}
		>
			<a href={number} onClick={handlePageClick(number)}>
				{number}
			</a>
		</li>
	);

	const renderSeparator = () => (
		<li key={uuid()} className={styles.item}>
			<span>...</span>
		</li>
	);

	const renderShortPagination = () => pages.map((page) => renderPaginationItem(page));

	const renderStartPagination = () => {
		const pagination = [];
		const startPoint = 0;
		const endPoint = startPoint + SHOWN_PAGES_COUNT;

		for (let i = startPoint; i < endPoint; i += 1) {
			pagination.push(renderPaginationItem(pages[i]));
		}

		pagination.push(renderSeparator());
		pagination.push(renderPaginationItem(lastPage));

		return pagination;
	};

	const renderEndPagination = () => {
		const pagination = [];
		const startPoint = lastPage - SHOWN_PAGES_COUNT;
		const endPoint = lastPage;

		pagination.push(renderPaginationItem(pages[0]));
		pagination.push(renderSeparator());

		for (let i = startPoint; i < endPoint; i += 1) {
			pagination.push(renderPaginationItem(pages[i]));
		}

		return pagination;
	};

	const renderMiddlePagination = () => {
		const pagination = [];
		const startPoint = currentPage - Math.floor(SHOWN_PAGES_COUNT / 2);
		const endPoint = currentPage + Math.floor(SHOWN_PAGES_COUNT / 2);

		pagination.push(renderPaginationItem(pages[0]));
		pagination.push(renderSeparator());

		for (let i = startPoint; i < endPoint; i += 1) {
			pagination.push(renderPaginationItem(pages[i]));
		}

		pagination.push(renderSeparator());
		pagination.push(renderPaginationItem(lastPage));

		return pagination;
	};

	const renderPagination = () => {
		const isStart = currentPage - SHOWN_PAGES_COUNT < 0;
		const isEnd = currentPage + SHOWN_PAGES_COUNT > lastPage + 1;

		if (pages.length <= SHOWN_PAGES_COUNT + 1) {
			return [...renderShortPagination()];
		}
		if (isStart) {
			return [...renderStartPagination()];
		}
		if (isEnd) {
			return [...renderEndPagination()];
		}
		return [...renderMiddlePagination()];
	};

	return (
		<nav className={styles.pagination}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<a href="#" onClick={handlePageClick(currentPage - 1)}>
						{'<'}
					</a>
				</li>
				{renderPagination()}
				<li className={styles.item}>
					<a href="#" onClick={handlePageClick(currentPage + 1)}>
						{'>'}
					</a>
				</li>
			</ul>
		</nav>
	);
};

Pagination.propTypes = propTypes;

export default Pagination;
