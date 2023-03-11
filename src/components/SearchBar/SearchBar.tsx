import React, { ChangeEvent } from 'react';
import { searchStore } from '../../store/searchStore';
import styles from './SearchBar.module.scss';

interface ISearchBarProps {
  children?: React.ReactNode;
}

interface SearchBarState {
  search: string;
}

export class SearchBar extends React.Component<ISearchBarProps, SearchBarState> {
  constructor(props: ISearchBarProps) {
    super(props);

    this.state = {
      search: '',
    };
  }

  componentDidMount(): void {
    this.setState({ search: searchStore.get() });
  }

  componentWillUnmount(): void {
    searchStore.set(this.state.search);
  }

  handleChangeSearch(e: ChangeEvent) {
    const { target } = e;

    if (target instanceof HTMLInputElement) {
      this.setState({ search: target.value });
    }
  }

  render(): React.ReactNode {
    return (
      <div className={styles.wrapper}>
        <div>
          <label>
            <svg width="20" height="20" className={styles.searchIcon} viewBox="0 0 20 20">
              <path
                d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                stroke="currentColor"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </label>
          <input
            value={this.state.search}
            onChange={this.handleChangeSearch.bind(this)}
            type="text"
            className={styles.searchInput}
            placeholder="Search bar design guide"
          />
        </div>
        <button type="button">Search</button>
      </div>
    );
  }
}
