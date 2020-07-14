import React from "react";

export const GifGridItem = ({title, url }) => {

  return (
    <div className="Card">
        
      <img src={url} alt="Cats" />
      <p>{title}</p>
    </div>
  );
};
