import React from 'react';
import styles from './NavBar.module.scss';

export class NavBar extends React.Component {
  render(): React.ReactNode {
    return (
      <nav className={styles.nav}>
        <u className={styles.menu}>
          <li className={styles.menuItem}>
            <a href="/">Main</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
        </u>
      </nav>
    );
  }
}
