import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect } from 'vitest';
import { Navbar } from './ui';

const matchText = 'TEST-HEADER';

const matchRoutes = [
  {
    title: 'TEST-TITLE',
    path: '/test',
    key: 'text-page',
  },
];

describe('Navbar test', () => {
  it('Navbar render test', () => {
    render(
      <BrowserRouter>
        <Navbar headerText={matchText} routes={matchRoutes} />
      </BrowserRouter>
    );

    expect(screen.getByText(matchText)).toBeInTheDocument();
  });
});
