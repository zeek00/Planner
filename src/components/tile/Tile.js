import React from "react";
import styles from "./Tile.module.css"

export const Tile = ({tile}) => {
  const descriptionValues = Object.values(tile); 
  return (
    <div className={styles.container}>
        
        {descriptionValues.map((item, index)=>(
          <p key={index}className={index === 0 ? styles.title : styles.tile}>{item}</p>
        ))}
    </div>
  );
};
