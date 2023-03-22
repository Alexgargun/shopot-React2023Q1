import { render, screen } from '@testing-library/react';
import { it, describe, expect, vi } from 'vitest';
import UserCardList from '.';

const str = JSON.stringify([{ name: 'teresa teng' }]);
const blob = new Blob([str]);
const file = new File([blob], 'values.json', {
  type: 'image/jpeg',
});

const mockUserArray = [
  {
    id: 'id-1',
    fullName: 'Demo Test #1',
    email: 'email1@example.com',
    dateOfBirth: '2001-01-01',
    preferCity: 'London',
    programming: ['React'],
    position: 'Junior',
    avatar: file,
  },
  {
    id: 'id-2',
    fullName: 'Demo Test #2',
    email: 'email2@example.com',
    dateOfBirth: '2001-01-02',
    preferCity: 'Tokyo',
    programming: ['Vue'],
    position: 'Middle',
    avatar: file,
  },
];

/**
 * @vitest-environment jsdom
 */
describe('UserCard component', () => {
  window.URL.createObjectURL = vi.fn(() => 'image/fake.jpeg');

  it('UserCard renders', () => {
    render(<UserCardList users={mockUserArray} />);
    expect(screen.getByText(mockUserArray[0].fullName)).toBeInTheDocument();
    expect(screen.getByText(mockUserArray[1].fullName)).toBeInTheDocument();
  });
});
