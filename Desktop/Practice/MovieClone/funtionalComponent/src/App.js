import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies : [
          {
            title: "다이아",
            img: "http://file2.nocutnews.co.kr/newsroom/image/2015/09/10/20150910140223276998.jpg"
          },
          {
            title:  "소녀시대",
            img: "https://i.ytimg.com/vi/0Tl8tkgPaac/maxresdefault.jpg"
          },
          {
            title:  "AOA",
            img: "https://pm1.narvii.com/6287/ed3441d830aaa8b985cd98686689079e0404479d_hq.jpg",
          },
          {
            title: "러블리즈",
            img: "https://cdnimg.melon.co.kr/resource/image/cds/musicstory/imgUrl20180423110634395.jpg",
          },
          {
            title: "마마무",
            img: "https://pds.joins.com/news/component/htmlphoto_mmdata/201706/22/htm_20170622164836842424.jpg"
          },
        ]
      })
    }, 2000)
  }

  state = {}

  _renderMovies = () => {
    const movies = this.state.movies.map((x, index) => {
      return <Movie key={index} movie={x}/>
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "loading..."}
      </div>
    )
  }
}

export default App;
