import React from 'react';
import { NavLink } from 'react-router-dom';
import { TypeRoute } from 'shared/types';
import styles from './NavBar.module.scss';

interface INavBarProps {
  headerText: string;
}

export class NavBar extends React.Component<INavBarProps> {
  getLinkStyle(isActive: boolean) {
    return isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink;
  }

  render(): React.ReactNode {
    return (
      <header className="container">
        <div className={styles.headerText}>{this.props.headerText}</div>
        <nav className={styles.nav}>
          <NavLink className={({ isActive }) => this.getLinkStyle(isActive)} to={TypeRoute.Main}>
            Main
          </NavLink>
          <NavLink className={({ isActive }) => this.getLinkStyle(isActive)} to={TypeRoute.About}>
            About Us
          </NavLink>
        </nav>
      </header>
    );
  }
}
