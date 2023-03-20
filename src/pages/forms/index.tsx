import UserContainer from 'features/user-form-container';
import { Component, ReactNode } from 'react';

export default class FormsPage extends Component {
  render(): ReactNode {
    return (
      <>
        <h1 className="text-center">React Forms</h1>
        <UserContainer />
      </>
    );
  }
}
