import { fireEvent, render, screen } from '@testing-library/react';
import { FieldDateOfBirth, TypeFormValue } from 'entities/user';
import { describe, expect, it, vi } from 'vitest';

const mockOnChange = vi.fn((value: TypeFormValue) => value);

const setup = () => {
  const utils = render(<FieldDateOfBirth error="" onChange={mockOnChange} />);
  const input = screen.getByLabelText('input-date-of-birth') as HTMLInputElement;

  return {
    input,
    ...utils,
  };
};

const matchString = '2004-02-15';

describe('Test FieldDateOfBirth', () => {
  it('Test onInput with value', () => {
    const { input } = setup();
    fireEvent.input(input, { target: { value: matchString } });
    expect(input).toHaveValue(matchString);
    expect(mockOnChange).toBeCalledTimes(1);
    expect(mockOnChange).toHaveReturnedWith(matchString);
  });
});
