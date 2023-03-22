import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FieldProgramming } from '.';

describe('Test FieldProgramming', () => {
  it('Test set value', () => {
    render(<FieldProgramming error="" />);

    const input = screen.getByLabelText('input-programming-React') as HTMLInputElement;

    expect(input).not.toBeChecked();
    input.click();
    expect(input).toBeChecked();
  });
});
