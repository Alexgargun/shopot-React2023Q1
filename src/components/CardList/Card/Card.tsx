import React from 'react';
import styles from './Card.module.scss';
import { ICardData } from 'shared/interfaces';

interface ICardProps {
  card: ICardData;
}

interface ICardState {
  id: number;
  title: string;
  owner: string;
  image: string;
  views: number;
  likes: number;
  addedAt: string;
}

export class Card extends React.Component<ICardProps, ICardState> {
  constructor(props: ICardProps) {
    super(props);

    this.state = {
      ...props.card,
    };
  }

  render(): React.ReactNode {
    return (
      <div className={styles.card}>
        <div className={styles.image}>
          <img src={this.state.image} />
        </div>
        <div className={styles.title}>{this.state.title}</div>
        <div className={styles.by}>{this.state.owner}</div>
        <div className={styles.info}>
          <div className={styles.stats}>
            <span>{this.state.views}</span>
            <span>{this.state.likes}</span>
          </div>
          <div className={styles.addedAt}>{this.state.addedAt}</div>
        </div>
      </div>
    );
  }
}
