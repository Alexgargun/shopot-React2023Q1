import { render, screen } from '@testing-library/react';
import { it, describe, expect, vi } from 'vitest';
import { UserCard } from '.';

const str = JSON.stringify([{ name: 'teresa teng' }]);
const blob = new Blob([str]);
const file = new File([blob], 'values.json', {
  type: 'image/jpeg',
});

const mockUser = {
  fullName: 'Demo Test',
  email: 'email@example.com',
  dateOfBirth: '2001-01-01',
  preferCity: 'London',
  programming: ['React'],
  position: 'Junior',
  avatar: file,
};

/**
 * @vitest-environment jsdom
 */
describe('UserCard component', () => {
  window.URL.createObjectURL = vi.fn(() => 'image/fake.jpeg');

  it('UserCard renders', () => {
    render(<UserCard user={mockUser} />);
    expect(screen.getByText(mockUser.fullName)).toBeInTheDocument();
    expect(screen.getByText(mockUser.email)).toBeInTheDocument();
    expect(screen.getByText(mockUser.dateOfBirth)).toBeInTheDocument();
    expect(screen.getByText(mockUser.preferCity)).toBeInTheDocument();
    expect(screen.getByText(mockUser.programming.join(', '))).toBeInTheDocument();
    expect(screen.getByText(mockUser.position)).toBeInTheDocument();
  });
});
