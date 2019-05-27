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
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Clickster</Header>
        {this.state.cards.map( card => (
           <Card 
           clickCount={this.clickCount}
           id={card.id}
           key = {card.id}
           image = {card.image}/>

        ) ) }
       
      </Wrapper>
    );
  }

}

export default App;
