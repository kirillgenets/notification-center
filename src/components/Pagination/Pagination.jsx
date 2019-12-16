import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NOTIFICATIONS_PER_PAGE } from '../../store/constants/constants';
import fetchData from '../../API/fetchData';
import styles from './Pagination.css';

const SHOWN_PAGES_COUNT = 5;

const Pagination = (props) => {
  const [pages, setPages] = useState([]);

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

  const getPagesMarkup = () => {
    const isBiggerThanLimit = props.currentPage - SHOWN_PAGES_COUNT > 0;

    const startPoint = isBiggerThanLimit ? props.currentPage - SHOWN_PAGES_COUNT : 0;
    const endPoint = startPoint + SHOWN_PAGES_COUNT;

    const JSX = [];
    
    if (!isBiggerThanLimit) {
      for (let i = startPoint; i < endPoint; i += 1) {
        JSX.push(<li key={pages[i]} className={styles.item}>
                  <a
                    href={pages[i]}
                    onClick={handlePageClick(pages[i])}
                  >
                    {pages[i]}
                  </a>
                </li>);
        
      }
      
      JSX.push(<li className={styles.item}>
                <span>...</span>
              </li>);
      
      JSX.push(<li className={styles.item}>
                <a
                  href="#"
                  onClick={handlePageClick(pages[pages.length - 1])}
                >
                  {pages[pages.length - 1]}
                </a>
              </li>);
    } else {
      JSX.push(<li className={styles.item}>
                  <a
                    href="#"
                    onClick={handlePageClick(pages[0])}
                  >
                    {pages[0]}
                  </a>
                </li>);

      JSX.push(<li className={styles.item}>
                <span>...</span>
              </li>);

      for (let i = startPoint; i < endPoint; i += 1) {
        JSX.push(<li key={pages[i]} className={styles.item}>
                  <a
                    href={pages[i]}
                    onClick={handlePageClick(pages[i])}
                  >
                    {pages[i]}
                  </a>
                </li>);
        
      }
    }

    return JSX;
  }

  return (
    <nav className={styles.pagination}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a
            href="#"
            onClick={handlePageClick(props.currentPage - 1)}
          >
            {'<'}
          </a>
        </li>
        {getPagesMarkup()}
        {/* {pages.map((page) => (
          <li key={page} className={styles.item}>
            <a
              href={page}
              onClick={handlePageClick(page)}
            >
              {page}
            </a>
          </li>
        ))} */}
        <li className={styles.item}>
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
