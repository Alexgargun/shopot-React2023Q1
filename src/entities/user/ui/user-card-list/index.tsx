import styles from './styles.module.scss';
import { TypeUser } from 'entities/user/types';
import { Component, ReactNode } from 'react';
import { UserCard } from 'entities/user';

interface UserCardListProps {
  users: TypeUser[];
}

export default class UserCardList extends Component<UserCardListProps> {
  render(): ReactNode {
    if (this.props.users.length === 0) {
      return (
        <div className={styles.noData}>
          <h2 className="text-center">No data!</h2>
        </div>
      );
    }
    return (
      <div className={styles.users}>
        {this.props.users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    );
  }
}
