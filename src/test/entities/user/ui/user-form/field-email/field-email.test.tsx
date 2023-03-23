import { fireEvent, render, screen } from '@testing-library/react';
import { FieldEmail } from 'entities/user';
import { describe, expect, it } from 'vitest';

const matchString = 'email@example.com';

const setup = () => {
  const utils = render(<FieldEmail error="" />);
  const input = screen.getByLabelText('input-email') as HTMLInputElement;

  return {
    input,
    ...utils,
  };
};

describe('Test FieldEmail', () => {
  it('Test FieldEmail with value', () => {
    const { input } = setup();
    fireEvent.input(input, { target: { value: matchString } });
    expect(input).toHaveValue(matchString);
  });
});
