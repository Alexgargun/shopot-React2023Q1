import { Component, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { TypeRoute } from 'shared/types';
import styles from './styles.module.scss';

type TypeNavbarProps = {
  headerText: string;
  routes: TypeRoute[];
};

export default class Navbar extends Component<TypeNavbarProps> {
  getLinkStyle(isActive: boolean) {
    return isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink;
  }

  render(): ReactNode {
    const navLinks = this.props.routes.map((route) => {
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
