import { fireEvent, render, screen } from '@testing-library/react';
import { FieldDateOfBirth } from 'entities/user';
import { describe, expect, it } from 'vitest';

const setup = () => {
  const utils = render(<FieldDateOfBirth error="" />);
  const input = screen.getByLabelText('input-date-of-birth') as HTMLInputElement;

  return {
    input,
    ...utils,
  };
};

const matchString = '2004-02-15';

describe('Test FieldDateOfBirth', () => {
  it('Test onInput with value', () => {
    const { input } = setup();
    fireEvent.input(input, { target: { value: matchString } });
    expect(input).toHaveValue(matchString);
  });
});
