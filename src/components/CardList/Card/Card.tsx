import React from 'react';
import styles from './Card.module.scss';
import { ICard } from 'shared/interfaces';
import { EyeOutlined, LikeOutlined } from '@ant-design/icons';

interface ICardProps {
  card: ICard;
}

interface ICardState extends ICard {}

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
        <div className={styles.body}>
          <div className={styles.title}>{this.state.title}</div>
          <div className={styles.by}>
            Added by <span>{this.state.owner}</span>
          </div>
          <div className={styles.info}>
            <div className={styles.stats}>
              <span>
                <EyeOutlined className={styles.statsIcon} style={{ color: 'gray' }} />
                {this.state.views}
              </span>
              <span>
                <LikeOutlined className={styles.statsIcon} style={{ color: 'gray' }} />
                {this.state.likes}
              </span>
            </div>
            <div className={styles.addedAt}>{this.state.addedAt}</div>
          </div>
        </div>
      </div>
    );
  }
}
