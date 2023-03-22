import { fireEvent, render, screen } from '@testing-library/react';
import { TypeFormValue } from 'entities/user';
import { describe, it, vi } from 'vitest';
import FieldPosition from '.';

const mockOnChange = vi.fn((value: TypeFormValue) => value);

const setup = () => {
  const utils = render(<FieldPosition error="" onChange={mockOnChange} />);
  const input = screen.getByLabelText('input-position-Junior') as HTMLInputElement;

  return {
    input,
    ...utils,
  };
};

describe('Test FieldPosition', () => {
  it('Test set value', () => {
    const { input } = setup();

    expect(input).not.toBeChecked();
    fireEvent.click(input);
    expect(input).toBeChecked();
    expect(mockOnChange).toBeCalledTimes(1);
  });
});
