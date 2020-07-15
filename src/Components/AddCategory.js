import React, { useState } from "react";
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
  const [inputValue, setInputValue] = useState('');


  // Listening to changes 
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };
  // props of Giff App to Add more Categories
  const handleSubmit = (e) => {
    e.preventDefault();
    
        // Valid  Input
if(inputValue.trim().length > 2 ){
    setCategories( cats =>  [inputValue,...cats] )
    setInputValue('')
}

}
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="category"
        type="text"
        value={inputValue}
        placeholder="Search your favorites categories"
        onChange={handleInputValue}
      />
    </form>
  );
};

AddCategory.propTypes = { 
    setCategories : PropTypes.func.isRequired
}
