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
  render(): React.ReactNode {
    if (this.props.cards.length === 0) {
      return <div className="text-center">No data</div>;
    }

    return (
      <div className={styles.cardList}>
        {this.props.cards.map((card: ICard) => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
    );
  }
}
