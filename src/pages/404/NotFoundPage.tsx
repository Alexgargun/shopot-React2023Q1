import React from 'react';

export class NotFoundPage extends React.Component {
  componentDidMount(): void {
    document.title = 'React Components: 404';
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">404 Not found!</h1>
      </div>
    );
  }
}
