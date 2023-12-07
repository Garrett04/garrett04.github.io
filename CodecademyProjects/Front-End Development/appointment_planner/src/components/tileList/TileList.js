import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = ({contactList, appointmentList}) => {
  return (
    <div>
      <Tile data={contactList ? contactList : appointmentList} />
    </div>
  );
};