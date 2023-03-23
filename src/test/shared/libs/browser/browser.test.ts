import { getSearchValue, setSearchValue } from 'shared/libs';
import { LOCAL_STORAGE_SEARCH_KEY } from 'shared/libs/browser/config';
import { beforeEach, describe, expect, it } from 'vitest';

/**
 * https://amitd.co/code/testing/spying-on-localstorage-in-jest
 */

const matchStringValue1 = 'test-search-value-1';
const matchStringValue2 = 'test-search-value-2';

describe('Browser test', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('Set search value to localStorage', () => {
    setSearchValue(matchStringValue1);

    expect(localStorage.getItem(LOCAL_STORAGE_SEARCH_KEY)).toEqual(matchStringValue1);
  });

  it('Get search value from localStorage', () => {
    localStorage.setItem(LOCAL_STORAGE_SEARCH_KEY, matchStringValue2);

    expect(getSearchValue()).toEqual(matchStringValue2);
  });
});
