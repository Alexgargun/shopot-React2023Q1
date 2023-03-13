import React from 'react';

interface IAboutPageProps {
  children?: React.ReactNode;
}

export class AboutPage extends React.Component<IAboutPageProps> {
  render() {
    return (
      <>
        {this.props.children}
        <div className="container">
          <h1 className="text-center">About Us page!</h1>
        </div>
      </>
    );
  }
}
