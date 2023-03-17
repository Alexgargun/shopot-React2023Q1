import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { TypeRoute } from 'shared/types';
import { PageContainer } from 'widgets/page-container';
import AboutPage from './about';
import Error404 from './error404';
import MainPage from './main';

export const enum RouteEndpoint {
  Index = '/index.html',
  Main = '/',
  About = '/about',
  NotFound = '*',
}

export const routes: TypeRoute[] = [
  { title: 'Main', path: RouteEndpoint.Main, key: 'main-page' },
  { title: 'About Us', path: RouteEndpoint.About, key: 'about-page' },
];

export default class Routing extends React.Component {
  render(): React.ReactNode {
    return (
      <Routes>
        <Route
          index
          element={<PageContainer routes={routes} headerText="Main" content={<MainPage />} />}
        />
        <Route
          path={RouteEndpoint.Index}
          element={<PageContainer routes={routes} headerText="Main" content={<MainPage />} />}
        />
        <Route
          path={RouteEndpoint.Main}
          element={<PageContainer routes={routes} headerText="Main" content={<MainPage />} />}
        />
        <Route
          path={RouteEndpoint.About}
          element={<PageContainer routes={routes} headerText="About Us" content={<AboutPage />} />}
        />
        <Route
          path={RouteEndpoint.NotFound}
          element={<PageContainer routes={routes} headerText="404" content={<Error404 />} />}
        />
      </Routes>
    );
  }
}
