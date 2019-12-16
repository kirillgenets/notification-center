import React, { useState } from 'react';
import FilterContainer from '../../containers/FilterContainer';
import styles from './Menu.css';

const Menu = () => {
  const [isShown, setIsShown] = useState(false);

  const handleTogglerClick = () => {
    setIsShown(() => !isShown);
  };

  const onFilterSubmit = () => {
    setIsShown(() => false);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.toggler}
        onClick={handleTogglerClick}
      >
        Category
      </button>
      {isShown
        ? <FilterContainer onFilterSubmit={onFilterSubmit} />
        : null}
    </div>
  );
};

export default Menu;
