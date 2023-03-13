import React from 'react';

interface INotFoundPageProps {
  children?: React.ReactNode;
}

export class NotFoundPage extends React.Component<INotFoundPageProps> {
  render() {
    return (
      <>
        {this.props.children}
        <div className="container">
          <h1 className="text-center">404 Not found!</h1>
        </div>
      </>
    );
  }
}
