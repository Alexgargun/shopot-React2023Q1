import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Error404 } from '.';

/**
 * @vitest-environment jsdom
 */
describe('Error 404 page test', () => {
  it('Error 404 page render', () => {
    render(<Error404 />);
    expect(screen.getByText('404 Not found')).toBeInTheDocument();
  });
});
