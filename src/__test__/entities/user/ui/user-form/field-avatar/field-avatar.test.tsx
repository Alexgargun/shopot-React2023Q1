import { fireEvent, render, screen } from '@testing-library/react';
import { FieldAvatar } from 'entities/user';
import { describe, expect, it } from 'vitest';

describe('Test FieldAvatar', () => {
  it('Test render FieldAvatar', () => {
    render(<FieldAvatar error="" />);

    const input = screen.getByLabelText('input-avatar') as HTMLInputElement;

    fireEvent.change(input, { target: { value: '' } });
    expect(input).toHaveValue('');
  });
});
