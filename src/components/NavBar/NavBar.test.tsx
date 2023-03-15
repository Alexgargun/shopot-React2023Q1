import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { it, describe, expect } from 'vitest';
import { NavBar } from './NavBar';

const text = 'NavBar text for header';

/**
 * @vitest-environment jsdom
 */
describe('NavBar component', () => {
  it('NavBar renders', async () => {
    render(
      <BrowserRouter>
        <NavBar headerText={text} />
      </BrowserRouter>
    );

    expect(screen.getByText(text)).toBeInTheDocument();

    const links = screen.getAllByRole('link');

    expect(links[0]).toHaveTextContent(/Main/i);
    expect(links[1]).toHaveTextContent(/About Us/i);
  });
});
