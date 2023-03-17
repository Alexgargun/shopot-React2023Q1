import { FC } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PageContainer from './ui';

const matchH1Text = 'Test page';

const MockPage: FC = () => {
  return <h1>{matchH1Text}</h1>;
};

describe('PageContainer test', () => {
  it('PageContainer render test', () => {
    render(<PageContainer headerText="Header text" content={<MockPage />} routes={[]} />);

    expect(screen.getByText(matchH1Text)).toBeInTheDocument();
  });
});
