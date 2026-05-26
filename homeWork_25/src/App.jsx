import { Component } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Section from "./components/Section";

import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);

    const savedVotes = JSON.parse(localStorage.getItem("votes"));

    this.state = {
      votes: savedVotes || {
        sad: 0,
        happy: 0,
        love: 0,
        shock: 0,
        laugh: 0,
      },

      winner: "",
      numberOfVotes: 0,
      showResults: false,
    };
  }

  addVote = (emoji) => {
    this.setState({
      votes: {
        ...this.state.votes,
        [emoji]: this.state.votes[emoji] + 1,
      },
    });
  };

  showResults = () => {
    const votes = this.state.votes;

    let maxVotes = 0;
    let winner = "";

    for (let key in votes) {
      if (votes[key] > maxVotes) {
        maxVotes = votes[key];
        winner = key;
      }
    }

    const emojis = {
      sad: "🥲",
      happy: "😁",
      love: "😍",
      shock: "😱",
      laugh: "😄",
    };

    this.setState({
      winner: emojis[winner],
      numberOfVotes: maxVotes,
      showResults: true,
    });
  };

  clearResults = () => {
    localStorage.removeItem("votes");

    this.setState({
      votes: {
        sad: 0,
        happy: 0,
        love: 0,
        shock: 0,
        laugh: 0,
      },

      winner: "",
      numberOfVotes: 0,

      showResults: false,
    });
  };

  componentDidUpdate() {
    localStorage.setItem("votes", JSON.stringify(this.state.votes));
  }

  render() {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center w-50 mx-auto my-3">
        <Header />

        <Main
          votes={this.state.votes}
          addVote={this.addVote}
          showResults={this.showResults}
          clearResults={this.clearResults}
        />

        {this.state.showResults && (
          <Section
            winner={this.state.winner}
            numberOfVotes={this.state.numberOfVotes}
          />
        )}
      </div>
    );
  }
}

export default App;
