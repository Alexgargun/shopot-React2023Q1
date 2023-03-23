import { LOCAL_STORAGE_SEARCH_KEY } from './config';

export const getSearchValue = (): string => {
  return window.localStorage.getItem(LOCAL_STORAGE_SEARCH_KEY) || '';
};

export const setSearchValue = (value: string): void => {
  window.localStorage.setItem(LOCAL_STORAGE_SEARCH_KEY, value);
};
