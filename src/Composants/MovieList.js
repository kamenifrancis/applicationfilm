import React from 'react'
import MovieCards from './MovieCards'
const MovieList = ({MovieData}) => { 
  console.log('MovieData',MovieData) 
  return ( 
    <div>
      {
        MovieData.map((el)=>   <MovieCards Movie = {el} /> )
            
      } 
      
    </div>
  )
}

export default MovieList
