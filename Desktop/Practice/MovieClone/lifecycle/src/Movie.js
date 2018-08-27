import React, { Component } from 'react'
import './Movie.css'

class Movie extends Component {
  render() {
    return (     
      <div>
        <MoviePoster poster={this.props.movie.img}/>
        <h1>{this.props.movie.title}</h1>
      </div>
    )
  }
}

class MoviePoster extends Component {
  render() {
    return (
      <img alt="" src = {this.props.poster}></img>
    )
  }
}

export default Movie
