import styles from './styles.module.scss';
import { ChangeEvent, Component, ReactNode } from 'react';
import { getSearchValue, setSearchValue } from 'shared/libs';
import { Button, SearchOutlined } from 'shared/ui';

interface SearchBarState {
  search: string;
}

export default class SearchBar extends Component<Record<string, never>, SearchBarState> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      search: getSearchValue(),
    };
  }

  componentDidMount(): void {
    this.setState({ search: getSearchValue() });
  }

  componentWillUnmount(): void {
    setSearchValue(this.state.search);
  }

  handleChangeSearch(e: ChangeEvent) {
    const { target } = e;

    if (target instanceof HTMLInputElement) {
      this.setState({ search: target.value });
    }
  }

  render(): ReactNode {
    return (
      <div className={styles.wrapper}>
        <div className={styles.searchInputWrapper}>
          <SearchOutlined className={styles.searchIcon} />
          <input
            value={this.state.search}
            onChange={(e) => this.handleChangeSearch(e)}
            className={styles.searchInput}
            type="text"
            placeholder="Search bar design guide"
            aria-label="search-bar-input"
          />
        </div>
        <Button type="button">Search</Button>
      </div>
    );
  }
}
