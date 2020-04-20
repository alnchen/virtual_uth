import React from 'react';
import Card from './cards/card';

export default class DealerHand extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        showDealerHand: 0
      }

      this.showCards = this.showCards.bind(this);
  }

  componentWillReceiveProps(){
      this.setState({
        showDealerHand: 0
      })
  }

  showCards() {
      this.setState({
        showDealerHand: this.state.showDealerHand + 1
      })
  }

  render() {
    const { showDealerHand } = this.state;
    const { hand } = this.props;
  
    return (
        <div id="dealer-hand-wrapper">
          <div id="dealer-hand-cards">
              {showDealerHand > 0 && <Card card={hand[0]} />}
              {showDealerHand > 1 && <Card card={hand[1]} />}
              {showDealerHand < 1 && <img id='dealer-placeholder' src="https://opengameart.org/sites/default/files/styles/medium/public/card%20back%20black.png" alt='card' />}
              {showDealerHand < 2 && <img id='dealer-placeholder'src="https://opengameart.org/sites/default/files/styles/medium/public/card%20back%20black.png" alt='card' />}
          </div>
          <button id='dealer-show' onClick={this.showCards}>SHOW</button>
        </div>
    );
  }
}