import { fireEvent, render, screen } from '@testing-library/react';
import { FieldPreferCity } from 'entities/user';
import { describe, expect, it } from 'vitest';

const setup = () => {
  const utils = render(<FieldPreferCity error="" />);
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
