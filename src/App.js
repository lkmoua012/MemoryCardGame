import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import ScoreCard from "./components/ScoreCard";
import "./App.css";

class App extends Component {

  state = {
    friends,
    chosen: [],
    score: 0
  };

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

  removeFriend = id => {

    const friends = this.shuffle(this.state.friends);

    if (this.state.score === 11) {
      this.setState({ score: 0});
      alert("Congratulations! You win!");
      this.setState({ chosen: [] });
      return;
    }

    if (this.state.chosen.includes(id) === true) {
      this.setState({ score: 0});
      alert("You've already selected this class! Game over.");
      this.setState({ chosen: [] });
    }

    else {
    let chosen = this.state.chosen.push(id);
    this.setState(prevState => {
      return {score: prevState.score +1}
    });

  }
    // console debug
    // console.log(this.state.chosen);

    this.setState({ friends });
  };

  render() {
    return (
      <Wrapper>
        <ScoreCard>{this.state.score}</ScoreCard>
        <Title>Fate/Stay Night Class Memory Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
