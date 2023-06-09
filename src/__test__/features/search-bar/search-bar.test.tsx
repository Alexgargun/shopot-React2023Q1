import { fireEvent, render, screen } from '@testing-library/react';
import { SearchBar } from 'features/search-bar';
import { describe, expect, it } from 'vitest';

/**
 * https://testing-library.com/docs/example-input-event/
 */

const setup = () => {
  const utils = render(<SearchBar />);

  const input = screen.getByLabelText('search-bar-input') as HTMLInputElement;

  return {
    input,
    ...utils,
  };
};

describe('SearchBar test', () => {
  it('SearchBar change input test', () => {
    const { input } = setup();

    fireEvent.change(input, { target: { value: '0987' } });

    expect(input.value).toBe('0987');
  });
});
