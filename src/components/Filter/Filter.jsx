import React from 'react';
import PropTypes from 'prop-types';
import { CategoryFilters, ReadStatusFilters } from '../../store/constants/constants';
import styles from './Filter.css';

const Filter = props => {
    const handleSubmit = evt => {
        evt.preventDefault();
        
        const filterData = new FormData(evt.target);
        const readStatus = filterData.get('read-status');
        const category = filterData.get('category');

        if (readStatus) {
            props.setReadStatusFilter(readStatus);
        }

        if (category) {
            props.setCategoryFilter(category);
        }       
        
        props.onFilterSubmit();
    }

    const handleResetClick = () => {
        props.setReadStatusFilter(ReadStatusFilters.SHOW_ALL);
        props.setCategoryFilter(CategoryFilters.SHOW_ALL);
    }

    return (
        <form className={styles.filter} onSubmit={handleSubmit}>
            <button className={styles.reset} onClick={handleResetClick}>Reset Filter</button>
            <fieldset className={styles.group}>
                <div className={styles.row}>
                    <input className={styles.radio} id="read-radio" type="radio" name="read-status" value={ReadStatusFilters.SHOW_READ} />
                    <label className={styles.label} htmlFor="read-radio">Read</label>
                </div>
                <div className={styles.row}>
                    <input className={styles.radio} id="unread-radio" type="radio" name="read-status" value={ReadStatusFilters.SHOW_UNREAD} />
                    <label className={styles.label} htmlFor="unread-radio">Unread</label>
                </div>
            </fieldset>
            <fieldset className={styles.group}>
                <div className={styles.row}>
                    <input className={styles.radio} id="critical-radio" type="radio" name="category" value={CategoryFilters.SHOW_CRITICAL} />
                    <label className={styles.label} htmlFor="critical-radio">Critical</label>
                </div>
                <div className={styles.row}>
                    <input className={styles.radio} id="warn-radio" type="radio" name="category" value={CategoryFilters.SHOW_WARN} />
                    <label className={styles.label} htmlFor="warn-radio">Warn</label>
                </div>
                <div className={styles.row}>
                    <input className={styles.radio} id="success-radio" type="radio" name="category" value={CategoryFilters.SHOW_SUCCESS} />
                    <label className={styles.label} htmlFor="success-radio">Success</label>
                </div>
                <div className={styles.row}>
                    <input className={styles.radio} id="info-radio" type="radio" name="category" value={CategoryFilters.SHOW_INFO} />
                    <label className={styles.label} htmlFor="info-radio">Info</label>
                </div>
                <div className={styles.row}>
                    <input className={styles.radio} id="info-radio" type="radio" name="category" value={CategoryFilters.SHOW_ERROR} />
                    <label className={styles.label} htmlFor="info-radio">Error</label>
                </div>
            </fieldset>
            <button className={styles.submit}>Apply</button>
        </form>
    );
};

Filter.propTypes = {
    setReadStatusFilter: PropTypes.func.isRequired,
    setCategoryFilter: PropTypes.func.isRequired,
    onFilterSubmit: PropTypes.func
}

export default Filter;
