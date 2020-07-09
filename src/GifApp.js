import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory";

export const GifApp = () => {
  const [categories, setCategories] = useState(["Fun", "Mood", "Love"]);

  return (
    <div>
      <h1>Gif App</h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map(category => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </div>
  );
};
