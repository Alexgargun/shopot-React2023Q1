import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import FieldFullName from '.';

const setup = () => {
  const utils = render(<FieldFullName error="" />);
  const input = screen.getByLabelText('input-full-name') as HTMLInputElement;

  return {
    input,
    ...utils,
  };
};

const matchString = 'Demo Test';

describe('Test FieldFullName', () => {
  it('Test onInput with value', () => {
    const { input } = setup();
    fireEvent.input(input, { target: { value: matchString } });
    expect(input.value).toBe(matchString);
  });
});
