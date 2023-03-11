import React from 'react';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TypeRoute } from 'shared/types';
import { NavBar } from 'components/NavBar';
import { MainPage } from 'pages/main';
import { NotFoundPage } from 'pages/404';
import { AboutPage } from 'pages/about';
import { Footer } from 'components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={TypeRoute.Main} element={<MainPage />} />
            <Route path={TypeRoute.About} element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
