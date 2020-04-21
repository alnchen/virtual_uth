import { SUITS, VALUES } from '/Users/allchen/uth/src/cards/constants.js';
import shuffle from 'shuffle-array';

  export const buildDeck = () => {
    const deck = [];

    SUITS.forEach(suit => {
        VALUES.forEach(value => {
            const card = {
                suit: suit,
                value: value
            }

            deck.push(card);
        })
    })

    return shuffle(deck);
  }