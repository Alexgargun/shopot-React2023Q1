import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { UserContainer } from '.';

vi.mock('../../entities/user/ui/user-form/user-from', () => {
  const UserForm = vi.fn(() => <div>UserFormMock</div>);
  return { UserForm };
});

vi.mock('../../entities/user/ui/user-card-list/index.tsx', () => {
  const UserCardList = vi.fn(() => <div>UserCardListMock</div>);
  return { UserCardList };
});

describe('Test render UserContainer', () => {
  render(<UserContainer />);

  it('Test render UserContainer', () => {
    expect(screen.getByText('UserFormMock')).toBeInTheDocument();
    expect(screen.getByText('UserCardListMock')).toBeInTheDocument();
  });
});

describe.todo('Test UserContainer addUser method', () => {
  const str = JSON.stringify([{ name: 'teresa teng' }]);
  const blob = new Blob([str]);
  const file = new File([blob], 'values.json', {
    type: 'image/jpeg',
  });

  const mockUser = {
    fullName: 'Demo Demo',
    email: 'mail@mail.com',
    dateOfBirth: '2007-01-02',
    preferCity: 'London',
    programming: ['React'],
    position: 'Junior',
    avatar: file,
  };

  it('Test UserContainer addUser method', () => {
    expect(mockUser).toBe(mockUser);
  });
});
