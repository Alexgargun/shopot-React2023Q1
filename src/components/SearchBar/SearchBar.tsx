import React, { ChangeEvent } from 'react';
import { SearchOutlined } from 'shared/UI';
import { searchStore } from '../../store/searchStore';
import styles from './SearchBar.module.scss';

interface SearchBarState {
  search: string;
}

export class SearchBar extends React.Component<Record<string, never>, SearchBarState> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      search: searchStore.get(),
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
        <div className={styles.searchInputWrapper}>
          {/* <SearchOutlined className={styles.searchIcon} /> */}
          <SearchOutlined className={styles.searchIcon} />
          <input
            value={this.state.search}
            onChange={(e) => this.handleChangeSearch(e)}
            className={styles.searchInput}
            type="text"
            placeholder="Search bar design guide"
          />
        </div>
        <button className={styles.btnOutlined} type="button">
          Search
        </button>
      </div>
    );
  }
}
