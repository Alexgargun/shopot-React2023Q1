import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FormsPage } from '.';

const matchH1Text = 'React Forms';

describe('Forms page test', () => {
  it('Forms page render test', () => {
    render(<FormsPage />);

    expect(screen.getByText(matchH1Text)).toBeInTheDocument();
  });
});
