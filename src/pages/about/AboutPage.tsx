import React from 'react';

export class AboutPage extends React.Component {
  componentDidMount(): void {
    document.title = 'React Components: Abut Us page';
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">About Us page!</h1>
      </div>
    );
  }
}
