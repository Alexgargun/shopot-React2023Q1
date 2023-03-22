import { fireEvent, render, screen } from '@testing-library/react';
import { FieldPreferCity, TypeFormValue } from 'entities/user';
import { describe, expect, it, vi } from 'vitest';

const mockOnChange = vi.fn((value: TypeFormValue) => value);

const setup = () => {
  const utils = render(<FieldPreferCity error="" onChange={mockOnChange} />);
  const input = screen.getByLabelText('input-prefer-city') as HTMLSelectElement;

  return {
    input,
    ...utils,
  };
};

describe('Test FieldPreferCity', async () => {
  it('Test set value', () => {
    const { input } = setup();

    fireEvent.keyDown(input, { keyCode: 40, key: 'ArrowDown' });
    fireEvent.keyDown(input, { keyCode: 13, key: 'Enter' });
    expect(input).toHaveValue('-');
  });
});
