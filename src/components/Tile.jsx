import React from "react";

function Tile({ playerTurn, onClick, value, className }) {
  let hoverClass = null;
  if (value == null && playerTurn != null) {
    hoverClass = `${playerTurn.toLowerCase()}-hover`;
  }
  return (
    <div
      onClick={onClick}
      className={`tile ${className} ${hoverClass} ${
        value === "X" ? "X_color" : "O_color"
      }`}
    >
      {value}
    </div>
  );
}

export default Tile;
