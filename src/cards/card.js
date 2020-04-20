import React from 'react';

export default class Card extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
      }
  }

  componentWillReceiveProps(){
      this.setState({
        showFlop: false
      })
  }

  showCards() {
      this.setState({
        showFlop: true
      })
  }

  render() {
      const SUITICONS = {
          spade: 'https://res.cloudinary.com/ac31624/image/upload/v1587100949/spade_jw8eag.png',
          heart: 'https://res.cloudinary.com/ac31624/image/upload/v1587100949/heart_pq9dhu.png',
          club: 'https://res.cloudinary.com/ac31624/image/upload/v1587100949/club_muiew0.png',
          diamond: 'https://res.cloudinary.com/ac31624/image/upload/v1587100949/diamond_nbbdru.png'
      }
    const { card } = this.props;
    const {suit, value } = card;
    // const iconStyle = {
    //     height: '100%',
    //     width: '100%',
    //     objectFit: 'contain'
    // };

    const valueColor = suit === 'spade' || suit === 'club' ? 'black-text' : 'red-text'

    return (
        <div id='card'>
            <span id='card-value'>
                <span id={valueColor}>{value}</span>
            </span>
            <span id='suit-wrapper'><img id='card-suit' alt={suit} src={SUITICONS[suit]} /></span>
            {/* <img id='card-suit' alt={suit} src={SUITICONS[suit]} /> */}
        </div>
    );
  }
}