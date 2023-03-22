import { fireEvent, render, screen } from '@testing-library/react';
import { FieldEmail, TypeFormValue } from 'entities/user';
import { describe, it, vi } from 'vitest';

const mockOnChange = vi.fn((value: TypeFormValue) => value);

const setup = () => {
  const utils = render(<FieldEmail error="" onChange={mockOnChange} />);
  const input = screen.getByLabelText('input-email') as HTMLInputElement;

  return {
    input,
    ...utils,
  };
};

const matchString = 'email@example.com';

describe('Test FieldEmail', () => {
  it('Test onInput with value', () => {
    const { input } = setup();
    fireEvent.input(input, { target: { value: matchString } });
    expect(input.value).toBe(matchString);
    expect(mockOnChange).toBeCalledTimes(1);
    expect(mockOnChange).toHaveReturnedWith(matchString);
  });
});
