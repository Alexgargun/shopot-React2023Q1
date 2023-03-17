import { render, screen } from '@testing-library/react';
import { routes } from 'pages';
import { TypeRoute } from 'shared/types';
import { describe, expect } from 'vitest';

export declare interface IMockNavbarProps {
  routes: TypeRoute[];
}

const matchRouteTitle = routes[0].title;

const MockNavbar = (props: IMockNavbarProps) => (
  <>
    {props.routes.map((route) => {
      return <div key={route.key}>{route.title}</div>;
    })}
  </>
);

describe('Test page routes', () => {
  it('Test render routes', () => {
    render(<MockNavbar routes={routes} />);
    expect(screen.getByText(matchRouteTitle)).toBeInTheDocument();
  });
});
