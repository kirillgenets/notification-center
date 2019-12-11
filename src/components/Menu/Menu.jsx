import React, { useState } from 'react';
import Filter from '../Filter/Filter';
import styles from './Menu.css';

const Menu = () => {
  const [isShown, setIsShown] = useState(false);

  const handleTogglerClick = () => {
    setIsShown(() => !isShown);
  }

  return (
    <div className={styles.container}>
      <button className={styles.toggler} onClick={handleTogglerClick}>Category</button>
      {isShown ?
        <Filter /> :
        null}
    </div>
  )
}

export default Menu;