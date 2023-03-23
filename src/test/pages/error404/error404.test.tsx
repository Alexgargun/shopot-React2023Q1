import { render, screen } from '@testing-library/react';
import { Error404 } from 'pages/error404';
import { describe, it, expect } from 'vitest';

/**
 * @vitest-environment jsdom
 */
describe('Error 404 page test', () => {
  it('Error 404 page render', () => {
    render(<Error404 />);
    expect(screen.getByText('404 Not found')).toBeInTheDocument();
  });
});
