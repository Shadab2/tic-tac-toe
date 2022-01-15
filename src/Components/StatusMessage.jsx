import React from "react";

function StatusMessage({ winner, current }) {
  const noMovesLeft = current.board.every((item) => item !== null);
  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{" "}
          <span className={winner === "X" ? "text-green" : "text-orange"}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next Move for{" "}
          <span className={current.next === "X" ? "text-green" : "text-orange"}>
            {current.next}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          {" "}
          <span className="text-green">X</span> and{" "}
          <span className="text-orange">O</span> has tied.
        </>
      )}
    </div>
  );
}

export default StatusMessage;
