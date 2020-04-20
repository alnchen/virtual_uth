import React from 'react';
import Card from './cards/card';

export default class Flop extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        showFlop: 0
      }

      this.showCards = this.showCards.bind(this);
  }

  componentWillReceiveProps(){
      this.setState({
        showFlop: 0
      })
  }

  showCards() {
    const newValue = this.state.showFlop === 3 ? 3 : this.state.showFlop + 1

      this.setState({
        showFlop: newValue
      })
  }

  render() {
    const { showFlop } = this.state;
    const { hand } = this.props;

    return (
        // <span id="flop-wrapper">
        <>
            <span id="flop">
                {showFlop > 0 && <Card card={hand[0]} />}
                {showFlop > 1 && <Card card={hand[1]} />}
                {showFlop > 2 && <Card card={hand[2]} />}
                {showFlop < 1 && <img id='dealer-placeholder' src="https://opengameart.org/sites/default/files/styles/medium/public/card%20back%20black.png" alt='card' />}
                {showFlop < 2 && <img id='dealer-placeholder'src="https://opengameart.org/sites/default/files/styles/medium/public/card%20back%20black.png" alt='card' />}
                {showFlop < 3 && <img id='dealer-placeholder'src="https://opengameart.org/sites/default/files/styles/medium/public/card%20back%20black.png" alt='card' />}
            </span>
            {showFlop < 3 && <button id='flop-control' onClick={this.showCards}>FLOP</button>}
        </>
        // </span>
    );
  }
}