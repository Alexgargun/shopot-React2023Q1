import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageContainer } from 'widgets/page-container';
import AboutPage from './about';
import Error404 from './error404';
import MainPage from './main';

export const enum TypeRoute {
  Index = '/index.html',
  Main = '/',
  About = '/about',
  NotFound = '*',
}

export const routes = [
  { title: 'Main', path: TypeRoute.Main, key: 'main-page' },
  { title: 'About Us', path: TypeRoute.About, key: 'about-page' },
];

export default class Routing extends React.Component {
  render(): React.ReactNode {
    return (
      <Routes>
        <Route index element={<PageContainer headerText="Main" content={<MainPage />} />} />
        <Route
          path={TypeRoute.Index}
          element={<PageContainer headerText="Main" content={<MainPage />} />}
        />
        <Route
          path={TypeRoute.Main}
          element={<PageContainer headerText="Main" content={<MainPage />} />}
        />
        <Route
          path={TypeRoute.About}
          element={<PageContainer headerText="About Us" content={<AboutPage />} />}
        />
        <Route
          path={TypeRoute.NotFound}
          element={<PageContainer headerText="404" content={<Error404 />} />}
        />
      </Routes>
    );
  }
}
