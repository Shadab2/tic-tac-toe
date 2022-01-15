import React, { useState } from "react";
import Square from "./Square";

function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [next, setNext] = useState("X");
  const handleClick = (position) => {
    if (board[position]) return;
    let nextMove = next;
    setNext((prevState) => (prevState === "X" ? "O" : "X"));
    setBoard((prevBoard) =>
      prevBoard.map((state, pos) => (pos == position ? nextMove : state))
    );
  };

  const renderSquare = (position) => (
    <Square value={board[position]} handleClick={() => handleClick(position)} />
  );
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
