import React from 'react';
import styles from './styles.module.scss';
import { TypeCard } from 'entities/catalog/types';
import Card from '../card';

interface CardListProps {
  cards: TypeCard[];
}

interface CardListState {
  cards: TypeCard[];
}

export default class CardList extends React.Component<CardListProps, CardListState> {
  render(): React.ReactNode {
    if (this.props.cards.length === 0) {
      return <div className="text-center">No data</div>;
    }

    return (
      <div className={styles.cardList}>
        {this.props.cards.map((card: TypeCard) => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
    );
  }
}
