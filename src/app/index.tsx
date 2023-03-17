import Routing from 'pages';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    );
  }
}

export default App;
