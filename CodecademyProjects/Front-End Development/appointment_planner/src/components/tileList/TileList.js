import React from "react";
import { Tile } from '../tile/Tile';

export const TileList = ({dataList}) => {
  const renderItem = (item, idx) => {
    const { name, ...rest } = item;
    return <Tile key={idx} name={name} description={rest} />;
  }

  return (
    <div>
      {dataList.map((item, idx) => renderItem(item, idx))}
    </div>
  );
};