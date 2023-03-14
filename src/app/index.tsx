import React from 'react';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PageContainer } from 'components/PageContainer';
import { routes } from 'pages/routes';

class App extends React.Component {
  render() {
    const pageRoutes = routes.map((route) => {
      if (route.path === 'index') {
        return (
          <Route
            key={route.path}
            index
            element={<PageContainer headerText={route.headerText} content={route.content} />}
          />
        );
      }
      return (
        <Route
          key={route.path}
          path={route.path}
          element={<PageContainer headerText={route.headerText} content={route.content} />}
        />
      );
    });

    return (
      <BrowserRouter>
        <Routes>{...pageRoutes}</Routes>
      </BrowserRouter>
    );
  }
}

export default App;
