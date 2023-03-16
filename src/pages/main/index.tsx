import { CardList, catalogService, TypeCard } from 'entities/catalog';
import { SearchBar } from 'features/search-bar/ui';
import React from 'react';

interface IMainPageState {
  cards: TypeCard[];
}

class MainPage extends React.Component<Record<string, never>, IMainPageState> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  componentDidMount(): void {
    const cards: TypeCard[] = catalogService.findAll();

    // Load images
    cards.forEach((card) => {
      const img = new Image();
      img.src = card.image;
    });

    this.setState({ cards: cards });
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Main page</h1>
        <SearchBar />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default MainPage;
