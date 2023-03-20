import { LOCAL_STORAGE_SEARCH_KEY } from './config';

const setSearchValue = (value: string): void => {
  window.localStorage.setItem(LOCAL_STORAGE_SEARCH_KEY, value);
};

export default setSearchValue;
