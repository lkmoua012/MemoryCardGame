import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import ScoreCard from "./components/ScoreCard";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed

    const friends = this.state.friends.filter(friend => friend.id !== id);

    // if friends id equals to id already chosen
    // reset to 0

    // otherwise, add one
    this.setState(prevState => {
      return {score: prevState.score +1}
    });

    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <ScoreCard>{this.state.score}</ScoreCard>
        <Title>Memory Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
