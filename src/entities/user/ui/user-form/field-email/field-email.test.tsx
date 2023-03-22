import { fireEvent, render, screen } from '@testing-library/react';
import { FieldEmail, TypeFormValue } from 'entities/user';
import { describe, expect, it, vi } from 'vitest';

const matchString = 'email@example.com';

const mockOnChange = vi.fn((value: TypeFormValue) => {
  expect(value).toBe(matchString);
  return matchString;
});

const setup = () => {
  const utils = render(<FieldEmail error="" onChange={mockOnChange} />);
  const input = screen.getByLabelText('input-email') as HTMLInputElement;

  return {
    input,
    ...utils,
  };
};

describe('Test FieldEmail', () => {
  it('Test FieldEmail with value', () => {
    const { input } = setup();
    fireEvent.input(input, { target: { value: matchString } });
    expect(input).toHaveValue(matchString);
    expect(mockOnChange).toBeCalledTimes(1);
    expect(mockOnChange).toHaveReturnedWith(matchString);
  });
});
