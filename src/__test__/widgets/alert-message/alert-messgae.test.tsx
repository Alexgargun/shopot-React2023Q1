import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { AlertMessage } from 'widgets/alert-message';

const matchMessage = 'Test message';

describe('Test AlertMessage', () => {
  it('Test render AlertMessage', () => {
    render(<AlertMessage message={matchMessage} />);
    expect(screen.getByText(matchMessage)).toBeInTheDocument();
  });
});
