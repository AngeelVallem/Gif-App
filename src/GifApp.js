import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export const GifApp = () => {
  const [categories, setCategories] = useState(["Cats"]);

  return (
    <div>
      <h1>Gif App</h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map(category =>  
        
        <GifGrid key={category} category={category}/>
        )}
        
      </ol>
    </div>
  );
};
