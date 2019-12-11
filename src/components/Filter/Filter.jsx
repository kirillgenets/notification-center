import React from 'react';
import styles from './Filter.css';

const Filter = () => {
  return (
    <form className={styles.filter}>
      <button className={styles.reset}>Reset Filter</button>
      <fieldset className={styles.group}>
        <div className={styles.row}>
          <input className={styles.radio} id="read-radio" type="radio" name="read/unread" />
          <label className={styles.label} htmlFor="read-radio">Read</label>
        </div>
        <div className={styles.row}>
          <input className={styles.radio} id="unread-radio" type="radio" name="read/unread" />
          <label className={styles.label} htmlFor="unread-radio">Unread</label>
        </div>
      </fieldset>
      <fieldset className={styles.group}>
        <div className={styles.row}>
          <input className={styles.radio} id="critical-radio" type="radio" name="category" />
          <label className={styles.label} htmlFor="critical-radio">Critical</label>
        </div>
        <div className={styles.row}>
          <input className={styles.radio} id="warn-radio" type="radio" name="category" />
          <label className={styles.label} htmlFor="warn-radio">Warn</label>
        </div>
        <div className={styles.row}>
          <input className={styles.radio} id="success-radio" type="radio" name="category" />
          <label className={styles.label} htmlFor="success-radio">Success</label>
        </div>
        <div className={styles.row}>
          <input className={styles.radio} id="info-radio" type="radio" name="category" />
          <label className={styles.label} htmlFor="info-radio">Info</label>
        </div>
      </fieldset>
      <button className={styles.submit}>Apply</button>
    </form>
  )
}

export default Filter;