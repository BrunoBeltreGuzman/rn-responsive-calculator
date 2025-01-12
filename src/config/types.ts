export interface Card {
  id: number;
  value: string;
  suit: string;
}

export interface Cards {
  cards: Card[];
  rowIndex: number;
}

export interface Game {
  id: number;
  name: string;
  description: string;
  cardGroup: Cards[];
}
