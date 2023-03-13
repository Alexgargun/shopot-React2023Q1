import React from 'react';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TypeRoute } from 'shared/types';
import { MainPage } from 'pages/main';
import { NotFoundPage } from 'pages/404';
import { AboutPage } from 'pages/about';
import { Footer } from 'components/Footer';
import { PageContainer } from 'components/PageContainer';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path={TypeRoute.Main}
            element={<PageContainer headerText="Main" content={<MainPage />} />}
          />
          <Route
            path={TypeRoute.About}
            element={<PageContainer headerText="About Us" content={<AboutPage />} />}
          />
          <Route path="*" element={<PageContainer headerText="404" content={<NotFoundPage />} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
