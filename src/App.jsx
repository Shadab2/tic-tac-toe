import React, { useState } from "react";
import Board from "./Components/Board";
import { calculateWinner } from "./helper";
import "./Styles/root.scss";

export default () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [next, setNext] = useState("X");

  const winner = calculateWinner(board);
  const message = winner ? `${winner} has win!` : `Next Move for ${next}`;
  console.log(message);
  const handleClick = (position) => {
    if (board[position] || winner) return;
    let nextMove = next;
    setNext((prevState) => (prevState === "X" ? "O" : "X"));
    setBoard((prevBoard) =>
      prevBoard.map((state, pos) => (pos == position ? nextMove : state))
    );
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe </h1>
      <h3>{message}</h3>
      <Board board={board} handleClick={handleClick} />
    </div>
  );
};
