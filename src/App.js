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
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);

    const friends = this.shuffle(this.state.friends);

    // if friends id equals to id already chosen
    if (this.state.chosen.includes(id) === true) {
      this.setState({ score: 0});
      alert("You've already selected this character! Game over.");
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
