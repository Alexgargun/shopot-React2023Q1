import { UserContainer } from 'features/user-container';
import { Component, ReactNode } from 'react';

export class FormsPage extends Component {
  render(): ReactNode {
    return (
      <div className="container">
        <h1 className="text-center">React Forms</h1>
        <UserContainer />
      </div>
    );
  }
}
