import { Component, ReactNode } from 'react';
import { CardList, catalogService, TypeCard } from 'entities/catalog';
import { SearchBar } from 'features/search-bar';

interface IMainPageState {
  cards: TypeCard[];
}

class MainPage extends Component<Record<string, never>, IMainPageState> {
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

  render(): ReactNode {
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
