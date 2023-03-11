import { GithubOutlined } from '@ant-design/icons';
import React from 'react';
import styles from './Footer.module.scss';
import rsschoolLogo from '../../assets/images/rsschool-js-logo.webp';

export class Footer extends React.Component {
  render(): React.ReactNode {
    return (
      <div className={styles.footer}>
        <div className={styles.footerInner}>
          <a href="https://github.com/shopot" className={styles.shopot} target="_blank">
            <GithubOutlined style={{ fontSize: '26px' }} />
            <span>shopot</span>
          </a>
          <a href="https://rs.school/react/" className={styles.rsschool} target="_blank">
            <img src={rsschoolLogo} alt="RS School Logo" />
          </a>
        </div>
      </div>
    );
  }
}
