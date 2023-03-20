import { Component, ReactNode } from 'react';
import { UserForm } from 'entities/user';

export default class UserFormContainer extends Component {
  render(): ReactNode {
    return <UserForm />;
  }
}
