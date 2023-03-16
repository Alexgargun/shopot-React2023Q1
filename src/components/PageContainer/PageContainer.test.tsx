import React from 'react';
import { render, screen } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { PageContainer } from './PageContainer';
import { BrowserRouter } from 'react-router-dom';

const mockHeaderText = 'PageContainer test';
const mockContent = 'Content demo text';
/**
 * @vitest-environment jsdom
 */
describe('PageContainer test', () => {
  it('PageContainer render', () => {
    render(
      <BrowserRouter>
        <PageContainer
          headerText={mockHeaderText}
          content={React.createElement('div', {}, mockContent)}
        />
      </BrowserRouter>
    );

    expect(screen.getByText(mockHeaderText)).toBeInTheDocument();
    expect(screen.getByText(mockContent)).toBeInTheDocument();
  });
});
