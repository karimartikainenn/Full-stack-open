import { useState } from "react";
import React from "react";

const App = () => {
  const [selected, setSelected] = useState(0);

  const anecdotes = [
    { anecdote: "If it hurts, do it more often.", votes: useState(0) },
    {
      anecdote: "Adding manpower to a late software project makes it later!",
      votes: useState(0),
    },
    {
      anecdote:
        "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      votes: useState(0),
    },
    {
      anecdote:
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      votes: useState(0),
    },
    {
      anecdote: "Premature optimization is the root of all evil.",
      votes: useState(0),
    },
    {
      anecdote:
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      votes: useState(0),
    },
    {
      anecdote:
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
      votes: useState(0),
    },
    { anecdote: "The only way to go fast, is to go well.", votes: useState(0) },
  ];

  const handleVote = () => {
    const updatedAnecdotes = [...anecdotes];
    updatedAnecdotes[selected].votes[1](
      updatedAnecdotes[selected].votes[0] + 1
    );
    return updatedAnecdotes;
  };
  const mostVotes = () => {
    let max = 0;
    let index = 0;
    for (let i = 0; i < anecdotes.length; i++) {
      if (anecdotes[i].votes[0] > max) {
        max = anecdotes[i].votes[0];
        index = i;
      }
    }
    return index;
  };

  return (
    <div>
      <div>
        {anecdotes[selected].anecdote}
        <br />
        Votes: {anecdotes[selected].votes[0]}
        <br />
        <button onClick={handleVote}>Vote</button>
        <button
          onClick={() =>
            setSelected(Math.floor(Math.random() * anecdotes.length))
          }
        >
          Next Anecdote
        </button>
        <h1>Anecdote with most votes</h1>
        {anecdotes[mostVotes()].anecdote}
        <br />
        Votes: {anecdotes[mostVotes()].votes[0]}
      </div>
    </div>
  );
};

export default App;
