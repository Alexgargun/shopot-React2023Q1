import { Component, ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';
import { TypeRoute } from 'shared/types';
import { PageContainer } from 'widgets/page-container';
import AboutPage from './about';
import Error404 from './error404';
import FormsPage from './forms';
import MainPage from './main';

export const enum RouteEndpoint {
  Index = '/index.html',
  Main = '/',
  Forms = '/forms',
  About = '/about',
  NotFound = '*',
}

export const routes: TypeRoute[] = [
  { title: 'Main', path: RouteEndpoint.Main, key: 'main-page' },
  { title: 'Forms', path: RouteEndpoint.Forms, key: 'page-forms' },
  { title: 'About Us', path: RouteEndpoint.About, key: 'about-page' },
];

export default class Routing extends Component {
  render(): ReactNode {
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
          path={RouteEndpoint.Forms}
          element={
            <PageContainer routes={routes} headerText="React Forms" content={<FormsPage />} />
          }
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
