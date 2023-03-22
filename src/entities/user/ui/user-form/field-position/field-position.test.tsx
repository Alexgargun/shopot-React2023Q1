import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import FieldPosition from '.';

const setup = () => {
  const utils = render(<FieldPosition error="" />);
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
  });
});
