import React from 'react';
import { NavLink } from 'react-router-dom';
import { TypeRoute } from 'shared/types';
import styles from './NavBar.module.scss';

export class NavBar extends React.Component {
  render(): React.ReactNode {
    return (
      <nav className={styles.nav}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
          }
          to={TypeRoute.Main}
        >
          Main
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
          }
          to={TypeRoute.About}
        >
          About Us
        </NavLink>
      </nav>
    );
  }
}
