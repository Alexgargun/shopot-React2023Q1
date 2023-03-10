const LOCAL_STORAGE_SEARCH_KEY = 'rc-shopot_search-value';

export const searchStore = {
  get: (): string => {
    return window.localStorage.getItem(LOCAL_STORAGE_SEARCH_KEY) || '';
  },
  set: (value: string): void => {
    window.localStorage.setItem(LOCAL_STORAGE_SEARCH_KEY, value);
  },
};
