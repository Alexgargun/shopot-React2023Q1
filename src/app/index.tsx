import React from 'react';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TypeRoute } from 'shared/types';
import { MainPage } from 'pages/main';
import { NotFoundPage } from 'pages/404';
import { AboutPage } from 'pages/about';
import { Footer } from 'components/Footer';
import { NavBar } from 'components/NavBar';

class App extends React.Component {
  createNavBar(headerText: string) {
    return <NavBar headerText={headerText} />;
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path={TypeRoute.Main}
              element={<MainPage>{this.createNavBar('Main')}</MainPage>}
            />
            <Route
              path={TypeRoute.About}
              element={<AboutPage>{this.createNavBar('About Us')}</AboutPage>}
            />
            <Route path="*" element={<NotFoundPage>{this.createNavBar('404')}</NotFoundPage>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
