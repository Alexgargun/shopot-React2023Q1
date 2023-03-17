import { render, screen } from '@testing-library/react';
import { CardList } from 'entities/catalog';
import { it, describe, expect } from 'vitest';

const cardListMock = [
  {
    id: 1,
    title: 'Mock Object 1',
    owner: 'MERCIV',
    image: '/images/image-01.webp',
    views: 400,
    likes: 399,
    addedAt: '20/05/2022',
  },
  {
    id: 2,
    title: 'Mock Object 2',
    owner: 'MERCIV',
    image: '/images/image-02.webp',
    views: 300,
    likes: 299,
    addedAt: '21/05/2022',
  },
];

/**
 * @vitest-environment jsdom
 */
describe('CardList component', () => {
  it('CardList renders', () => {
    render(<CardList cards={cardListMock} />);
    expect(screen.getByText('Mock Object 1')).toBeInTheDocument();
    expect(screen.getByText('Mock Object 2')).toBeInTheDocument();
  });

  it('CardList renders without items', () => {
    render(<CardList cards={[]} />);
    expect(screen.getByText('No data')).toBeInTheDocument();
  });
});
