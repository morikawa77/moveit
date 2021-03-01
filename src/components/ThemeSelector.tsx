import React, { useContext } from 'react';

import { ThemeSelectorContext } from '../contents/ThemeSelectorContext';

import styles from '../styles/components/ThemeSelector.module.css';


export function ThemeSelector() {
  const { toogleTheme } = useContext(ThemeSelectorContext);

  return(  
    <div className={styles.container}>
      <label className={styles.switch} onClick={toogleTheme}>
        <input type="checkbox" />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
}