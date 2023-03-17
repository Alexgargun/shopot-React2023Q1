import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Button from '.';

describe('Button UI Test', () => {
  it('Button test render with default type="submit"', () => {
    render(<Button />);

    expect(screen.getByRole('button').getAttribute('type')).toBe('submit');
  });
});
