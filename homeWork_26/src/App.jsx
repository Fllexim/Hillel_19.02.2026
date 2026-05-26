import { useState, useEffect } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import Section from "./components/Section";

import "./index.css";

function App() {
  const savedVotes = JSON.parse(localStorage.getItem("votes"));

  const [votes, setVotes] = useState(
    savedVotes || {
      sad: 0,
      happy: 0,
      love: 0,
      shock: 0,
      laugh: 0,
    },
  );

  const [winner, setWinner] = useState("");
  const [numberOfVotes, setNumberOfVotes] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const addVote = (emoji) => {
    setVotes({
      ...votes,
      [emoji]: votes[emoji] + 1,
    });
  };

  const handleShowResults = () => {
    let maxVotes = 0;
    let winnerKey = "";

    for (let key in votes) {
      if (votes[key] > maxVotes) {
        maxVotes = votes[key];
        winnerKey = key;
      }
    }

    const emojis = {
      sad: "🥲",
      happy: "😁",
      love: "😍",
      shock: "😱",
      laugh: "😄",
    };

    setWinner(emojis[winnerKey]);
    setNumberOfVotes(maxVotes);
    setShowResults(true);
  };

  const clearResults = () => {
    localStorage.removeItem("votes");

    setVotes({
      sad: 0,
      happy: 0,
      love: 0,
      shock: 0,
      laugh: 0,
    });

    setWinner("");
    setNumberOfVotes(0);
    setShowResults(false);
  };

  useEffect(() => {
    localStorage.setItem("votes", JSON.stringify(votes));
  }, [votes]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-50 mx-auto my-3">
      <Header />

      <Main
        votes={votes}
        addVote={addVote}
        showResults={handleShowResults}
        clearResults={clearResults}
      />

      {showResults && <Section winner={winner} numberOfVotes={numberOfVotes} />}
    </div>
  );
}

export default App;
