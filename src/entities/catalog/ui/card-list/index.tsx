import { Component, ReactNode } from 'react';
import styles from './styles.module.scss';
import { TypeCard, Card } from 'entities/catalog';

interface CardListProps {
  cards: TypeCard[];
}

interface CardListState {
  cards: TypeCard[];
}

export class CardList extends Component<CardListProps, CardListState> {
  render(): ReactNode {
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
