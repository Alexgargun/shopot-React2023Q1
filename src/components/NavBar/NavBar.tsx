import React from 'react';
import { NavLink } from 'react-router-dom';
import { TypeRoute } from 'shared/types';
import styles from './NavBar.module.scss';

interface INavBarProps {
  headerText?: string;
}

export class NavBar extends React.Component<INavBarProps> {
  render(): React.ReactNode {
    return (
      <header className="container">
        <div className={styles.headerText}>{this.props.headerText || 'Main'}</div>
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
      </header>
    );
  }
}
