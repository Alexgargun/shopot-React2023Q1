import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FieldAvatar } from '.';

describe('Test FieldAvatar', () => {
  it('Test render FieldAvatar', () => {
    render(<FieldAvatar error="" />);

    const input = screen.getByLabelText('input-avatar') as HTMLInputElement;

    fireEvent.change(input, { target: { value: '' } });
    expect(input).toHaveValue('');
  });
});
