import data from '../data/cards.json';
import { TypeCard } from '../types';

const catalogService = {
  findAll(): TypeCard[] {
    return data.slice(0, 16);
  },
};

export default catalogService;
