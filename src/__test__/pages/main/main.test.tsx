import { render, screen } from '@testing-library/react';
import { MainPage } from 'pages/main';
import { describe, it, expect } from 'vitest';

/**
 * @vitest-environment jsdom
 */
describe('Main page test', () => {
  it('Main page render', () => {
    render(<MainPage />);
    expect(screen.getByText('Main page')).toBeInTheDocument();
  });
});
