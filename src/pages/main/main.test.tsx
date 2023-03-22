import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MainPage } from '.';

/**
 * @vitest-environment jsdom
 */
describe('Main page test', () => {
  it('Main page render', () => {
    render(<MainPage />);
    expect(screen.getByText('Main page')).toBeInTheDocument();
  });
});
