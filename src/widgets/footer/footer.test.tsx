import { render, screen } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { Footer } from './ui';

/**
 * @vitest-environment jsdom
 */
describe('Footer component', () => {
  it('Footer renders', () => {
    render(<Footer />);
    expect(screen.getByText('shopot')).toBeInTheDocument();
    expect(screen.getByAltText('RS School Logo')).toBeInTheDocument();
  });
});
