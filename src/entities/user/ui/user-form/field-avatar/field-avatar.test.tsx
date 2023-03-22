import { fireEvent, render, screen } from '@testing-library/react';
import { TypeFormValue } from 'entities/user';
import { describe, expect, it, vi } from 'vitest';
import FieldAvatar from '.';

const mockOnChange = vi.fn((value: TypeFormValue) => value);

describe('Test FieldAvatar', () => {
  it('Test render FieldAvatar', () => {
    render(<FieldAvatar error="" onChange={mockOnChange} />);

    const input = screen.getByLabelText('input-avatar') as HTMLInputElement;

    fireEvent.change(input, { target: { value: '' } });
    expect(input).toHaveValue('');
  });
});
