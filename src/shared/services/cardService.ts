import { ICard } from 'shared/interfaces';
import cards from '../../data/cards.json';

class CardService {
  private data: ICard[];

  constructor(data: ICard[]) {
    this.data = data;
  }

  findAll() {
    return this.data.slice(0, 16);
  }
}

export default new CardService(cards);
