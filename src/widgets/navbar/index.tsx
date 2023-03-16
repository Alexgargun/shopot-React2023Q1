import React from 'react';
import { NavLink } from 'react-router-dom';
import { TypeRoute } from 'shared/types';
import styles from './styles.module.scss';

interface INavbarProps {
  headerText: string;
}

export default class Navbar extends React.Component<INavbarProps> {
  getLinkStyle(isActive: boolean) {
    return isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink;
  }

  render(): React.ReactNode {
    return (
      <header className="container">
        <div className={styles.innerHeader}>
          <div className={styles.headerText}>{this.props.headerText}</div>
          <nav className={styles.nav}>
            <NavLink className={({ isActive }) => this.getLinkStyle(isActive)} to={TypeRoute.Main}>
              Main
            </NavLink>
            <NavLink className={({ isActive }) => this.getLinkStyle(isActive)} to={TypeRoute.About}>
              About Us
            </NavLink>
          </nav>
        </div>
      </header>
    );
  }
}
