import React, { useState } from "react";
import Board from "./Components/Board";
import History from "./Components/History";
import StatusMessage from "./Components/StatusMessage";
import { calculateWinner } from "./helper";
import "./Styles/root.scss";

const NEW_GAME = [{ board: Array(9).fill(null), next: "X" }];

export default () => {
  const [history, setHistory] = useState(NEW_GAME);

  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];

  const { winner, winningSquares } = calculateWinner(current.board);
  const handleClick = (position) => {
    if (current.board[position] || winner) return;

    setHistory((prevHistory) => {
      let last = prevHistory[prevHistory.length - 1];
      const newBoard = last.board.map((state, pos) =>
        pos == position ? last.next : state
      );
      let nextMove = last.next === "X" ? "O" : "X";
      return prevHistory.concat({ board: newBoard, next: nextMove });
    });
    setCurrentMove((prev) => prev + 1);
  };

  const moveTo = (moveNum) => setCurrentMove(moveNum);

  const resetGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };
  return (
    <div className="app">
      <h1>
        Tic <span className="text-green">Tac</span>Toe{" "}
      </h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handleClick={handleClick}
        winningSquares={winningSquares}
      />
      <button
        type="button"
        className={`btn-reset ${winner ? "active" : ""}`}
        onClick={resetGame}
      >
        Start The Game
      </button>
      <h2>Current Game History</h2>
      <History currentMove={currentMove} history={history} moveTo={moveTo} />
      <div className="bg-balls"></div>
    </div>
  );
};
