import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from 'app';

const matchH1Text = 'Main page';

describe('Test App component', () => {
  it('Test App render', () => {
    render(<App />);

    expect(screen.getByText(matchH1Text)).toBeInTheDocument();
  });
});
