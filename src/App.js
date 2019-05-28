import React, {Component} from 'react';
import Card from "./components/card";
import Wrapper from "./components/wrapper";
import Header from "./components/header";
import cards from "./cards.json";
import {Alert} from 'reactstrap';

class App extends Component {
  state = {
    cards,
    score:0,
    highscore:0
  };

  endGame = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score});
    }
   
    this.state.cards.forEach(card => {
      card.count=0;
    })
    this.setState({score:0});
  }
  clickCount = id => {
    this.state.cards.find((obj, i) => {
      if (obj.id===id) {
          if(cards[i].count === 0) {
            cards[i].count = cards[i].count + 1;
            this.setState({score:this.state.score +1});
            this.setState.cards = ShuffleCards(cards);
            return true;
          } else {
            this.endGame();
          }
      }
    });
  }
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Clickster</Header>
        <Alert color="danger">Game Over</Alert>
        {this.state.cards.map( card => (
           <Card 
           clickCount={this.clickCount}
           id={card.id}
           key = {card.id}
           imageUrl = {card.imageUrl}
           name = {card.name} />
        ) ) }
       
      </Wrapper>
    );
  }

}
function ShuffleCards(a) {
  var rndIndex, temp, i;
  for (i=a.length-1;i>0;i--) {
    rndIndex = Math.floor(Math.random() * (i+1));
    temp = a[i];
    a[i] = a[rndIndex];
    a[rndIndex] = temp;
  }
  return a;
}
export default App;
