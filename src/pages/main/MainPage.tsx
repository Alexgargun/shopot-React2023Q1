import { CardList } from 'components/CardList';
import { MotionContainer } from 'components/MotionContainer';
import { SearchBar } from 'components/SearchBar';
import React from 'react';
import cardService from 'shared/services/cardService';

const cards = cardService.findAll();

export class MainPage extends React.Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <h1 className="text-center">YouTube API Websites</h1>
        <MotionContainer identKey="cardList">
          <CardList cards={cards} />
        </MotionContainer>
      </div>
    );
  }
}
