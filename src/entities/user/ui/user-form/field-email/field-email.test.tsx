import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import FieldEmail from '.';

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
