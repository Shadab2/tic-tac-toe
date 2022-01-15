import React from "react";

function Square({ value, handleClick, isWinningSquare }) {
  return (
    <button
      className="square"
      onClick={handleClick}
      className={`square ${isWinningSquare ? "winning" : ""} ${
        value === "X" ? "text-green" : "text-orange"
      }`}
    >
      {value}
    </button>
  );
}

export default Square;
