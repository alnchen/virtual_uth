// import React from 'react';
import { SUITS, VALUES } from '/Users/allchen/uth/src/cards/constants.js';
import shuffle from 'shuffle-array';

// export class Deck extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             cards: []
//         }
//     }

//     buildDeck() {
//         const deck = [];

//         SUITS.forEach(suit => {
//             VALUES.forEach(value => {
//                 const card = {
//                     suit: suit,
//                     value: value
//                 }

//                 deck.push(card);
//             })
//         })

//         return shuffle(deck);
//     }

//     render() {
//       return <h1>this will be the deck</h1>;
//     }
//   }

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