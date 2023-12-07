import React from "react";

let nextId = 0;

export const Tile = ({data}) => {
  return (
    <div className="tile-container">
      {data.map((data) => (
        <li>
          {data.name}
          {data.phone}
          {data.email}
        </li>
      ))}
    </div>
  );
};
