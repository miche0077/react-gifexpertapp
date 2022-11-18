import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";



export const GifExpertApp = () =>{


  const [ categories, setCategories ] = useState([ "Rihanna"]);

    return (

     <> 
    <h2> Encontre os seus gifs favoritos </h2>
    <AddCategory setCategories={ setCategories }/>
    <hr  />
   
    <ol>
        {
         categories.map( category =>  
         <GifGrid 
         key = { category }
         category = { category }/>
    
         )
        }
         </ol>
     </>

    )
  

}