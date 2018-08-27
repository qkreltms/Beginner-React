import React from 'react'
import './Movie.css'

function Movie({movie}) {
    return (     
      <div>
        <MoviePoster poster={movie.img}/>
        <h1>{movie.title}</h1>
      </div>
    )
}

function MoviePoster({poster}) {
    return (
      <img alt="" src = {poster}></img>
    )
}

export default Movie
