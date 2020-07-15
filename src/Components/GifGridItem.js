import React from "react";

export const GifGridItem = ({title, url }) => {

  return (
    <div className="Card animate__animated animate__fadeInDown">
        
      <img src={url} alt="Cats" />
      <p>{title}</p>
    </div>
  );
};
