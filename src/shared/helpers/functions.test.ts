import { debounce } from 'shared/helpers';
import { describe, expect, it, vi } from 'vitest';

const observable: { timeout: ReturnType<typeof setTimeout> | null } = {
  timeout: null,
};

beforeAll(() => {
  vi.useFakeTimers();
  vi.spyOn(global, 'setTimeout');
});

const mockCallback = vi.fn((data = true) => expect(data).toBeTruthy());

describe('Test helper functions', () => {
  it('Test debounce function', async () => {
    debounce(mockCallback, observable);

    vi.runAllTimers();
  });
});

afterAll(() => {
  vi.useRealTimers();
});
