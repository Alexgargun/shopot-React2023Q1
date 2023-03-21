import { Component, ReactNode } from 'react';
import { TypeUser, UserCardList, UserForm } from 'entities/user';

interface IUserContainerState {
  users: TypeUser[];
}
export default class UserContainer extends Component<Record<string, never>, IUserContainerState> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = { users: [] };
  }

  addUser(user: TypeUser) {
    this.setState((prevState: IUserContainerState) => {
      const users = [...prevState.users];
      users.push({ ...user, id: `${Date.now()}` });

      return { users: users };
    });
  }

  render(): ReactNode {
    return (
      <>
        <UserForm addUser={(user: TypeUser) => this.addUser(user)} />
        <UserCardList users={this.state.users} />
      </>
    );
  }
}
