import React from 'react';
import styles from './Card.module.scss';
import { ICard } from 'shared/interfaces';
import { EyeOutlined, LikeOutlined } from '@ant-design/icons';

interface ICardProps {
  card: ICard;
}

type TypeCardState = ICard;

export class Card extends React.Component<ICardProps, TypeCardState> {
  render(): React.ReactNode {
    const { title, owner, image, views, likes, addedAt } = this.props.card;

    return (
      <div className={styles.card}>
        <div className={styles.image}>
          <img src={image} />
        </div>
        <div className={styles.body}>
          <div className={styles.title}>{title}</div>
          <div className={styles.by}>
            Added by <span>{owner}</span>
          </div>
          <div className={styles.info}>
            <div className={styles.stats}>
              <span>
                <EyeOutlined className={styles.statsIcon} style={{ color: 'gray' }} />
                {views}
              </span>
              <span>
                <LikeOutlined className={styles.statsIcon} style={{ color: 'gray' }} />
                {likes}
              </span>
            </div>
            <div className={styles.addedAt}>{addedAt}</div>
          </div>
        </div>
      </div>
    );
  }
}
