import styles from './styles.module.scss';
import { TypeUser } from 'entities/user/types';
import { Component, ReactNode } from 'react';

interface IUserCardProps {
  user: TypeUser;
}

export default class UserCard extends Component<IUserCardProps> {
  render(): ReactNode {
    const { fullName, email, dateOfBirth, preferCity, programming, position, avatar } =
      this.props.user;

    return (
      <div className={styles.card}>
        <div className={styles.fullName}>{fullName}</div>
        <div className={styles.email}>{email}</div>
        <div className={styles.avatar}>
          {avatar && <img src={URL.createObjectURL(avatar)} alt={fullName} />}
        </div>
        <div className={styles.dateOfBirth}>
          <span>Date of birth:</span> {dateOfBirth}
        </div>
        <div className={styles.preferCity}>
          <span>Prefer City:</span> {preferCity}
        </div>
        <div className={styles.programming}>
          <span>Programming with:</span> {programming.join(', ')}
        </div>
        <div className={styles.position}>
          <span>Position:</span> {position}
        </div>
      </div>
    );
  }
}
