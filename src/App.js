import React, {Component} from 'react';
import Card from "./components/card";
import Wrapper from "./components/wrapper";
import Header from "./components/header";
import cards from "./cards.json";

class App extends Component {
  state = {
    cards,
    score:0,
    highscore:0
  };

  clickCount = id => {
    this.state.cards.find((obj, i) => {
      if (obj.id===id) {
          if(cards[i].count === 0) {
            cards[i].count = cards[i].count + 1;
            this.setState({score:this.state.score +1});
          } else {
            alert("GameOver!");
          }
      }
    });
  }
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Clickster</Header>
        {this.state.cards.map( card => (
           <Card 
           clickCount={this.clickCount}
           id={card.id}
           key = {card.id}
           image = {card.image}
           name = {card.name} />
        ) ) }
       
      </Wrapper>
    );
  }

}

export default App;
