import { render, screen } from '@testing-library/react';
import { Card } from 'entities/catalog';
import { it, describe, expect } from 'vitest';

const cardMock = {
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
});
