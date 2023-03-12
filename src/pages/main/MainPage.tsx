import { CardList } from 'components/CardList';
import { MotionContainer } from 'components/MotionContainer';
import { SearchBar } from 'components/SearchBar';
import React from 'react';
import { ICard } from 'shared/interfaces';
import cardService from 'shared/services/cardService';

interface IMainPageState {
  cards: ICard[];
}

export class MainPage extends React.Component<object, IMainPageState> {
  constructor(props: object) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  componentDidMount(): void {
    const cards: ICard[] = cardService.findAll();

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
        <SearchBar />
        <h1 className="text-center">YouTube API Websites</h1>
        <MotionContainer identKey="cardList">
          <CardList cards={this.state.cards} />
        </MotionContainer>
      </div>
    );
  }
}
