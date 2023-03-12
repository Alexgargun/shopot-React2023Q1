import { render, screen } from '@testing-library/react';
import { it, describe, expect } from 'vitest';

import { ICard } from 'shared/interfaces';
import { Card } from './Card';

const cardMock: ICard = {
  id: 1,
  title: 'Project Iceman Website',
  owner: 'MERCIV',
  image: '/images/633c61fe1238b459490255.webp',
  views: 400,
  likes: 279,
  addedAt: '20/05/2022',
};

/**
 * @vitest-environment jsdom
 */
describe('Card component', () => {
  it('Card renders', () => {
    render(<Card card={cardMock} />);
    expect(screen.getByText('Project Iceman Website')).toBeInTheDocument();
  });

  it('Card snapshot', () => {
    const result = render(<Card card={cardMock} />);
    expect(result).toMatchSnapshot();
  });
});
