import { describe, expect, it } from 'vitest';
import { catalogService } from 'entities/catalog';

/**
 * @vitest-environment jsdom
 */
describe('catalogService findAll() test', () => {
  const result = catalogService.findAll();

  it('Returns 16 items', () => {
    expect(result.length).toBe(16);
  });

  it('Returns first item', () => {
    expect(result[0]).toEqual(expect.objectContaining({ title: 'Project Iceman Website' }));
  });
});
