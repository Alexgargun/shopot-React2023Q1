import { render, screen } from '@testing-library/react';
import { TypeFormValue } from 'entities/user';
import { describe, expect, it, vi } from 'vitest';
import FieldProgramming from '.';

const mockOnChange = vi.fn((value: TypeFormValue) => value);

describe('Test FieldProgramming', () => {
  it('Test set value', () => {
    render(<FieldProgramming error="" onChange={mockOnChange} />);

    const input = screen.getByLabelText('input-programming-React') as HTMLInputElement;

    expect(input).not.toBeChecked();
    input.click();
    expect(input).toBeChecked();
    expect(mockOnChange).toBeCalledTimes(1);
  });
});
