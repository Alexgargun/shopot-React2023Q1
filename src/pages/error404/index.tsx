import { Component, ReactNode } from 'react';

export default class Error404 extends Component {
  render(): ReactNode {
    return (
      <div className="container">
        <h1 className="text-center">404 Not found</h1>
      </div>
    );
  }
}
