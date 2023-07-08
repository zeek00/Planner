import React from "react";
import {Tile} from "../tile/Tile"
import PropTypes from 'prop-types';

export const TileList = ({data}) => {
  
  if (!data || !Array.isArray(data)) {
    console.log(data)
    // console.log('not an array')
    return null; // or any other fallback behavior, like rendering an error message
  }else{
    // console.log('is an array')

  }
  return (
    <div>
     { data.map((tile, index)=>(
        <Tile 
          tile={tile} 
          key={index} 
        />
      ))}
      
    </div>
  );
};

TileList.propTypes = {
  data: PropTypes.array.isRequired
}