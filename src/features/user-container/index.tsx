import { Component, ReactNode } from 'react';
import { TypeUser, UserCardList, UserForm } from 'entities/user';
import { AlertMessage } from 'widgets/alert-message';

interface IUserContainerState {
  users: TypeUser[];
  isAlertShowed: boolean;
}
export class UserContainer extends Component<Record<string, never>, IUserContainerState> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = { users: [], isAlertShowed: false };
  }

  addUser(user: TypeUser) {
    this.setState(
      (prevState: IUserContainerState) => {
        return { users: [...prevState.users, { ...user, id: `${Date.now()}` }] };
      },
      () => {
        this.setState({ isAlertShowed: true });
        setTimeout(() => this.setState({ isAlertShowed: false }), 4000);
      }
    );
  }

  render(): ReactNode {
    return (
      <>
        <UserForm addUser={(user: TypeUser) => this.addUser(user)} />
        <UserCardList users={this.state.users} />
        {this.state.isAlertShowed && <AlertMessage message="User data added successfully." />}
      </>
    );
  }
}
