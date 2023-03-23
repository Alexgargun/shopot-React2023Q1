import { Routing } from 'pages';
import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    );
  }
}
