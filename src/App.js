import React, { Component } from 'react';
import FriendCards from "./components/FriendCards";
import Nav from "./components/Navbar.js";
import Wrapper from "./components/Wrapper.js";
import Title from "./components/Title.js";
import Container from "./components/Container.js";
import Row from "./components/Row.js";
import Column from "./components/Column.js";
import friends from "./components/friends.json";
import "./App.css";

function friendsToMatch(arr) {
  for (let i = arr.length -1; i > 0; i --) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

class App extends Component {
  //Set this.state
  state = {
    friends,
    curScore: 0,
    topScore: 0,
    scored: "",
    clicked: []
  };

handleClick = id => {
  if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
  }
  else {
    this.handleReset();
  }
};

handleIncrement = () => {
  const newScore = this.state.curScore + 1;
  this.setState({
    curScore: newScore,
    scored: ""
  });
  if (newScore >= this.state.topScore) {
    this.setState({ topScore: newScore });
  }
  else if (newScore === 12) {
    this.setState({ scored: "You scored" });
  }
  this.handleShuffle();
};

handleReset = () => {
  this.setState({
    curScore: 0,
    topScore: this.state.topScore,
    scored: "Click an image to begin!",
    clicked: []
  });
  this.handleShuffle();
};

handleShuffle = () => {
  let friendMatched = friendsToMatch(friends);
  this.setState({ friends: friendMatched});
};


  render() {
    return (
      <Wrapper>
        <Nav
          title="Clicky Game"
          userScore={this.state.curScore}
          topScore={this.state.topScore}
          scored={this.state.scored}
        />

        <Title
          // Try to click on each charactoer, but don't hit any duplicates, or we'll relase the hounds.
        />

        <Container>
          <Row>
            {this.state.friends.map(friend => (
              <Column size="md-3 sm-6">
                <FriendCards
                  key={friends.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={friends.id}
                  image={friends.image}
                />
              </Column>
            ))}

          </Row>
        </Container>
      </Wrapper>
    );
  }
}


export default App;
