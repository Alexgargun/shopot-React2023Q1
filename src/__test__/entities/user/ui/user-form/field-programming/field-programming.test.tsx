import { render, screen } from '@testing-library/react';
import { FieldProgramming } from 'entities/user';
import { describe, expect, it } from 'vitest';

describe('Test FieldProgramming', () => {
  it('Test set value', () => {
    render(<FieldProgramming error="" />);

    const input = screen.getByLabelText('input-programming-React') as HTMLInputElement;

    expect(input).not.toBeChecked();
    input.click();
    expect(input).toBeChecked();
  });
});
