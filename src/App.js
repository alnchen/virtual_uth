import React from 'react';
import './App.css';
import PlayerHand from './playerhand'
import { buildDeck } from './cards/deck'
import DealerHand from './dealerhand';
import Flop from './flop';
import TurnAndRiver from './turnAndRiver';
import DeviceOrientation, { Orientation } from 'react-screen-orientation'

export default class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        deck: this.shuffleDeck(),
        playerCount: 1,
        gameStarted: false,
        playerHands: [],
        flop: [],
        turnAndRiver: [],
        dealerHand: [],
      }

      this.shuffleDeck = this.shuffleDeck.bind(this);
      this.newGame = this.newGame.bind(this);
      this.addPlayerCount = this.addPlayerCount.bind(this);
      this.minusPlayerCount = this.minusPlayerCount.bind(this);
      this.dealCards = this.dealCards.bind(this);
      this.reset = this.reset.bind(this);
  }

  shuffleDeck() {
    const shuffledDeck = buildDeck();

    return shuffledDeck;
  }

  newGame() {
    this.dealCards();
  }

  addPlayerCount() {
    const playerCount = this.state.playerCount === 6? 6 : this.state.playerCount + 1

    this.setState({
      playerCount: playerCount
    })
  }

  minusPlayerCount() {
    const playerCount = this.state.playerCount === 1 ? 1 : this.state.playerCount - 1

    this.setState({
      playerCount: playerCount
    })
  }

  dealCards() {
    const newDeck = this.shuffleDeck();
    const { playerCount } = this.state;
    const hands = [];

    for (var i = 0; i < playerCount; i++) {
      const cards = [newDeck.shift(), newDeck.shift()]

      hands.push(cards);
    }

    const dealerHand = [newDeck.shift(), newDeck.shift()]
    const flop = [newDeck.shift(), newDeck.shift(), newDeck.shift()]
    const turnAndRiver = [newDeck.shift(), newDeck.shift()]

    this.setState({
      playerHands: hands,
      deck: newDeck,
      dealerHand,
      flop,
      turnAndRiver,
    })
  }

  reset() {
    this.setState({
      deck: [],
      playerHands: [],
      flop: [],
      turnAndRiver: [],
      dealerHand: []
    })
  }

  render() {
    const { gameStarted, playerCount } = this.state;

    const renderPlayerHands = () => {
      const { playerHands } = this.state;

      return playerHands.map((hand, index) => {
        return (<PlayerHand index={index} hand={hand} />)
      })
    }

    const renderDealerHand = () => {
      const { dealerHand } = this.state;

      if (dealerHand.length < 1) {
        return null;
      }

      return <DealerHand hand={dealerHand} />
    }

    const renderFlop = () => {
      const { flop } = this.state;

      if (flop.length < 1) {
        return null;
      }
      
      return <Flop hand={flop} />
    }

    const renderTurnAndRiver = () => {
      const { turnAndRiver } = this.state;

      if (turnAndRiver.length < 1) {
        return null;
      }

      return <TurnAndRiver hand={turnAndRiver} />
    };

    return (
      <div className="App">
        <DeviceOrientation lockOrientation={'landscape'}>
          <Orientation orientation='landscape' alwaysRender={false}>
            <div id='player-hands-row'>{renderPlayerHands()}</div>
            {!gameStarted && (<div id="game-controls">
              <div id='players-label'>Players:</div>
              <div>
                <button id='player-count-button' onClick={this.minusPlayerCount}>-</button>
                <span id='player-count'> {playerCount} </span>
                <button id='player-count-button' onClick={this.addPlayerCount}>+</button>
              </div>
            </div>)}
            <div id="table-cards">
              {renderFlop()}
              {renderTurnAndRiver()}
            </div>
            <div id="dealer-hand">{renderDealerHand()}</div>
            <div id='clear-and-deal'>
              <button id='controls-action-button' onClick={this.reset}>CLEAR</button>
              <button id='controls-action-button' onClick={this.newGame}>DEAL</button>
            </div>
          </Orientation>
          <Orientation orientation='portrait' alwaysRender={false}>
           <span id='portrait-message'>Rotate your phone to start losing money</span>
          </Orientation>
        </DeviceOrientation>

        {/* <div id='player-hands-row'>{renderPlayerHands()}</div>
        {!gameStarted && (<div id="game-controls">
          <div id='players-label'>Players:</div>
          <div>
            <button id='player-count-button' onClick={this.minusPlayerCount}>-</button>
            <span id='player-count'> {playerCount} </span>
            <button id='player-count-button' onClick={this.addPlayerCount}>+</button>
          </div>
        </div>)}
        <div id="table-cards">
          {renderFlop()}
          {renderTurnAndRiver()}
        </div>
        <div id="dealer-hand">{renderDealerHand()}</div>
        <div id='clear-and-deal'>
          <button id='controls-action-button' onClick={this.reset}>CLEAR</button>
          <button id='controls-action-button' onClick={this.newGame}>DEAL</button>
        </div> */}
      </div>
    );
  }
}