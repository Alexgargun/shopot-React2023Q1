import { NavBar } from 'components/NavBar';
import React from 'react';

export class AboutPage extends React.Component {
  render() {
    return (
      <>
        <NavBar headerText="About Us" />
        <div className="container">
          <h1 className="text-center">About Us page!</h1>
        </div>
      </>
    );
  }
}
