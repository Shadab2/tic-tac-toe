import React from "react";

function History({ history, currentMove, moveTo }) {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((item, index) => (
          <li key={index}>
            <button
              className={`btn-move ${
                currentMove === index ? "active" : "text-orange"
              }`}
              onClick={() => moveTo(index)}
            >
              {index == 0 ? "Go to Start " : `Go to Move #${index}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
