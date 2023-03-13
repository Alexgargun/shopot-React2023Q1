import { NavBar } from 'components/NavBar';
import React from 'react';

export class NotFoundPage extends React.Component {
  render() {
    return (
      <>
        <NavBar headerText="404" />
        <div className="container">
          <h1 className="text-center">404 Not found!</h1>
        </div>
      </>
    );
  }
}
