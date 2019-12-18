import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import classNames from 'classnames';
import { NOTIFICATIONS_PER_PAGE } from '../../store/constants';
import fetchData from '../../API/fetchData';
import styles from './Pagination.css';

const Pagination = (props) => {
  const [pages, setPages] = useState([]);

  const SHOWN_PAGES_COUNT = 5;
  const lastPage = pages[pages.length - 1];

  const fetchPages = async () => {
    const response = await fetchData(`http://192.168.99.100:3000/api/v1/notifications/?page=1&perPage=${NOTIFICATIONS_PER_PAGE}`);
    setPages(() => Array.from({
      length: response.data.pagination.total,
    }, (item, index) => index + 1));
  };

  useEffect(() => {
    fetchPages();
  }, []);

  const handlePageClick = (page) => (evt) => {
    evt.preventDefault();

    if (page < 1 || page > pages.length) return;

    props.setCurrentPage(page);
  };

  const renderPaginationItem = (number) => (
      <li
        key={uuid()}
        className={classNames(
          styles.item,
          { [styles.current]: props.currentPage === number },
        )}
      >
        <a
          href={number}
          onClick={handlePageClick(number)}
        >
          {number}
        </a>
      </li>
  );

  const renderSeparator = () => (
      <li
        key={uuid()}
        className={styles.item}
      >
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
    const startPoint = props.currentPage - Math.floor(SHOWN_PAGES_COUNT / 2);
    const endPoint = props.currentPage + Math.floor(SHOWN_PAGES_COUNT / 2);

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
    const isStart = props.currentPage - SHOWN_PAGES_COUNT < 0;
    const isEnd = props.currentPage + SHOWN_PAGES_COUNT > lastPage + 1;

    if (pages.length <= SHOWN_PAGES_COUNT + 1) {
      return [...renderShortPagination()];
    } if (isStart) {
      return [...renderStartPagination()];
    } if (isEnd) {
      return [...renderEndPagination()];
    }
    return [...renderMiddlePagination()];
  };

  return (
    <nav className={styles.pagination}>
      <ul className={styles.list}>
        <li
          className={styles.item}
        >
          <a
            href="#"
            onClick={handlePageClick(props.currentPage - 1)}
          >
            {'<'}
          </a>
        </li>
        {renderPagination()}
        <li
          className={styles.item}
        >
          <a
            href="#"
            onClick={handlePageClick(props.currentPage + 1)}
          >
            {'>'}
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
