import { routes } from 'pages';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

interface INavbarProps {
  headerText: string;
}

export default class Navbar extends React.Component<INavbarProps> {
  getLinkStyle(isActive: boolean) {
    return isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink;
  }

  render(): React.ReactNode {
    const navLinks = routes.map((route) => {
      return (
        <NavLink
          key={route.key}
          className={({ isActive }) => this.getLinkStyle(isActive)}
          to={route.path}
        >
          {route.title}
        </NavLink>
      );
    });

    return (
      <header className="container">
        <div className={styles.innerHeader}>
          <div className={styles.headerText}>{this.props.headerText}</div>
          <nav className={styles.nav}>{navLinks}</nav>
        </div>
      </header>
    );
  }
}
