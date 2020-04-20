import React from 'react';
import Card from './cards/card';

export default class PlayerHand extends React.Component {
  constructor(props) {
      super(props);

      this.state = {

      }
  }

  render() {
    const { hand } = this.props;

    return (
        <div id="player-hand">
            <Card card={hand[0]} />
            <Card card={hand[1]} />
            {/* <span id='card-wrapper'><Card card={hand[0]} /></span>
            <span id='card-wrapper'><Card card={hand[1]} /></span> */}
        </div>
    );
  }
}