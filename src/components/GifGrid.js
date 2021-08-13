import React, { useState, useEffect} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) => {

  const { data:images, loading } = useFetchGifs( category );
  
    return ( 

       <>
       <h3 className="class=animate__animated animate__bounce animate__delay-2s"> { category } </h3>
       { loading && <p className="animate__animated animate__bounce animate__flash">Loading</p>}
      <div className="card-grid">

    {
    images.map( img =>(
        <GifGridItem
        key={ img.id }
        {...img} 
        />
    ))

    }  
    </div>

    
     
        </>
    )
}
