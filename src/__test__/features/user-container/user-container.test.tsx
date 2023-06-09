import { render, screen } from '@testing-library/react';
import { UserContainer } from 'features/user-container';
import { describe, expect, it, vi } from 'vitest';

vi.mock('../../../entities/user/ui/user-form/user-from', () => {
  const UserForm = vi.fn(() => <div>UserFormMock</div>);
  return { UserForm };
});

vi.mock('../../../entities/user/ui/user-card-list/index.tsx', () => {
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
