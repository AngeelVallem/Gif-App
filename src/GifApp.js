import React, { useState } from 'react'

export const GifApp = () => {

const [categories, setCategories] = useState(['Perros','Gatos','Hamsters'])


    const handleAdd = () =>{
        setCategories([...categories,'Ranas'])
    } 

    return (
        <div>
            <h1>Gif App</h1>
            <hr/>

           {/* TO DO: Add Component */}

          <ol>
            {
                categories.map(category=>{
                return <li key={category}>{category}</li>
                })
            }

          </ol>
            
        </div>
    )
}
