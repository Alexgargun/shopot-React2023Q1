import { SearchBar } from 'components/SearchBar';
import React from 'react';

export class MainPage extends React.Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <h1 className="text-center">Hello, Main Page</h1>
      </div>
    );
  }
}
