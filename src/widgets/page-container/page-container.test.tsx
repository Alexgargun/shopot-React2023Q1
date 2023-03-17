import { render } from '@testing-library/react';
import React from 'react';
import { it } from 'vitest';
import PageContainer from './ui';

const MockPage: React.FC = () => {
  return <h1>Test page</h1>;
};

describe('PageContainer test', () => {
  it('PageContainer render test', () => {
    render(<PageContainer headerText="Test page" content={<MockPage />} routes={[]} />);
  });
});
