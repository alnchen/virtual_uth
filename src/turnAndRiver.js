import React from 'react';
import Card from './cards/card';

export default class TurnAndRiver extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        showTurnAndRiver: 0
      }

      this.showCards = this.showCards.bind(this);
  }

  componentWillReceiveProps(){
      this.setState({
        showTurnAndRiver: 0
      })
  }

  showCards() {
      this.setState({
        showTurnAndRiver: this.state.showTurnAndRiver === 3 ? 3 : this.state.showTurnAndRiver + 1
      })
  }

  render() {
    const { showTurnAndRiver } = this.state;
    const { hand } = this.props;

    return (
        <>
          <div id="turn-and-rover">
            {showTurnAndRiver > 0 && <Card card={hand[0]} />}
            {showTurnAndRiver > 1 && <Card card={hand[1]} />}
            {showTurnAndRiver < 1 && <img id='dealer-placeholder' src="https://opengameart.org/sites/default/files/styles/medium/public/card%20back%20black.png" alt='card' />}
            {showTurnAndRiver < 2 && <img id='dealer-placeholder'src="https://opengameart.org/sites/default/files/styles/medium/public/card%20back%20black.png" alt='card' />}
          </div>
          { showTurnAndRiver < 2 && <button id='turn-control'  onClick={this.showCards}>{showTurnAndRiver === 1 ? 'RIVER' : 'TURN'}</button>}
        </>
    );
  }
}