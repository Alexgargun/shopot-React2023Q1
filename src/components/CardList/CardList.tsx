import React from 'react';
import { ICard } from 'shared/interfaces';
import { Card } from './Card/Card';
import styles from './CardList.module.scss';

interface CardListProps {
  cards: ICard[];
}

interface CardListState {
  cards: ICard[];
}

export class CardList extends React.Component<CardListProps, CardListState> {
  constructor(props: CardListProps) {
    super(props);

    this.state = {
      cards: props.cards,
    };
  }

  render(): React.ReactNode {
    return (
      <div className={styles.cardList}>
        {this.state.cards.map((card: ICard) => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
    );
  }
}
