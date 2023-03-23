import { render, screen } from '@testing-library/react';
import { FormsPage } from 'pages/forms';
import { describe, expect, it } from 'vitest';

const matchH1Text = 'React Forms';

describe('Forms page test', () => {
  it('Forms page render test', () => {
    render(<FormsPage />);

    expect(screen.getByText(matchH1Text)).toBeInTheDocument();
  });
});
