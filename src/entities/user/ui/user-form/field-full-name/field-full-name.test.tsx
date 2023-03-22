import { fireEvent, render, screen } from '@testing-library/react';
import { TypeFormValue } from 'entities/user';
import { describe, expect, it, vi } from 'vitest';
import FieldFullName from '.';

const mockOnChange = vi.fn((value: TypeFormValue) => value);

const setup = () => {
  const utils = render(<FieldFullName error="" onChange={mockOnChange} />);
  const input = screen.getByLabelText('input-full-name') as HTMLInputElement;

  return {
    input,
    ...utils,
  };
};

const matchString = 'Demo Test';

describe('Test FieldFullName', () => {
  it('Test onInput with value', () => {
    const { input } = setup();
    fireEvent.input(input, { target: { value: matchString } });
    expect(input.value).toBe(matchString);
    expect(mockOnChange).toBeCalledTimes(1);
    expect(mockOnChange).toHaveReturnedWith(matchString);
  });
});
