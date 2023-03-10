import React from 'react';
import { ICardData } from 'shared/interfaces';
import { Card } from './Card/Card';
import styles from './CardList.module.scss';

interface CardListProps {
  cards: ICardData[];
}

interface CardListState {
  cards: ICardData[];
}

export class CardList extends React.Component<CardListProps, CardListState> {
  constructor(props: CardListProps) {
    super(props);

    this.state = {
      cards: props.cards,
    };
  }

  render(): React.ReactNode {
    return this.state.cards.map((card: ICardData) => {
      return <Card key={card.id} card={card} />;
    });
  }
}
