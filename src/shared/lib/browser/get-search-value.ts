import { LOCAL_STORAGE_SEARCH_KEY } from './config';

const getSearchValue = (): string => {
  return window.localStorage.getItem(LOCAL_STORAGE_SEARCH_KEY) || '';
};

export default getSearchValue;
