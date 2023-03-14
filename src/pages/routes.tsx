import { TypeRoute } from 'shared/types';
import { NotFoundPage } from './404';
import { AboutPage } from './about';
import { MainPage } from './main';

export const routes = [
  {
    path: TypeRoute.Index,
    headerText: 'Main',
    content: <MainPage />,
  },
  {
    path: TypeRoute.Main,
    headerText: 'Main',
    content: <MainPage />,
  },
  {
    path: TypeRoute.About,
    headerText: 'About Us',
    content: <AboutPage />,
  },
  {
    path: TypeRoute.NotFound,
    headerText: '404',
    content: <NotFoundPage />,
  },
];
