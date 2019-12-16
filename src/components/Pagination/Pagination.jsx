import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { NOTIFICATIONS_PER_PAGE } from '../../store/constants/constants'; 
import fetchData from '../../API/fetchData';
import styles from './Pagination.css';

const Pagination = (props) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetchPages();
  });

  const fetchPages = async () => { 
    const response = await fetchData(`http://192.168.99.100:3000/api/v1/notifications/?page=1&perPage=${NOTIFICATIONS_PER_PAGE}`);
    setPages(() => Array.from({
      length: response.data.pagination.total
    }, (item, index) => index + 1));
  }

  const handlePageClick = (page) => {
    return (evt) => {
      evt.preventDefault();

      if (page < 1 || page > pages.length) return;

      props.setCurrentPage(page);
    }
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
        {pages.map((page) => (
          <li key={page} className={styles.item}>
            <a 
              href={page}
              onClick={handlePageClick(page)}
            >
              {page}
            </a>
          </li>
        ))}
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
  )
};

Pagination.propTypes = {
  setCurrentPage: PropTypes.func.isRequired
}

export default Pagination;
