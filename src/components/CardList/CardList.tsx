import { motion } from 'framer-motion';
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

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'linear',
  duration: 1,
};

export class CardList extends React.Component<CardListProps, CardListState> {
  constructor(props: CardListProps) {
    super(props);

    this.state = {
      cards: props.cards,
    };
  }

  componentDidMount(): void {
    this.props.cards.forEach((card) => {
      const img = new Image();
      img.src = card.image;
    });
  }

  render(): React.ReactNode {
    return (
      <motion.div
        key="cardList"
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className={styles.cardList}>
          {this.state.cards.map((card: ICard) => {
            return <Card key={card.id} card={card} />;
          })}
        </div>
      </motion.div>
    );
  }
}
