import React, { useEffect, useState } from "react";
import {GifGridItem} from './GifGridItem'
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

useEffect( () => {
    getGifs(category)
    .then(setImages)
},[category]);




  return (
    <>
    <h1>{category}</h1>
    <div className="Card-grid">
      
        
        {
            images.map(img => <GifGridItem  key={img.id} {...img}/> )
        }
    </div>
    </>
  );
};
