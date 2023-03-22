import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AboutPage } from '.';

/**
 * @vitest-environment jsdom
 */
describe('Error 404 page test', () => {
  it('Error 404 page render', () => {
    render(<AboutPage />);
    expect(screen.getByText('About Us page')).toBeInTheDocument();
  });
});
