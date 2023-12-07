import React from "react";

let nextId = 0;

export const Tile = ({name, description}) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {Object.values(description).map((value) => (
        <p className="tile">{value}</p>
      ))}
    </div>
  );
};
