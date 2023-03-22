import { act, fireEvent, render, screen } from '@testing-library/react';
import { UserForm } from 'entities/user';
import { describe, expect, it, vi } from 'vitest';
const setup = () => {
  const addUserMock = vi.fn(() => {
    expect(true).toBeTruthy();
  });

  const utils = render(<UserForm addUser={addUserMock} />);

  const input = screen.getByLabelText('input-full-name') as HTMLInputElement;
  const buttonReset = screen.getByLabelText('button-reset') as HTMLButtonElement;

  return {
    input,
    buttonReset,
    addUserMock,
    ...utils,
  };
};

describe('Test FieldAvatar', () => {
  it('Test render FieldAvatar', () => {
    const { input, buttonReset } = setup();

    fireEvent.change(input, { target: { value: 'Demo Test' } });
    expect(input).toHaveValue('Demo Test');

    act(() => {
      buttonReset.click();
    });
  });
});
