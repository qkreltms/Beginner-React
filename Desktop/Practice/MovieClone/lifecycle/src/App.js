import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'
 
const movies = [
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

class App extends Component {
  state = {
    greeting: "hello"
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        greeting: "hello again"
      })
    }, 2000)
  }

  componentWillUpdate() {
    setTimeout(() => {
      this.setState({
        greeting: "hello"
      })
    }, 2000)
  }

  render() {
    return (
      <div className="App">
      <h1>{this.state.greeting}</h1>
        {movies.map((x, index) => {
          return <Movie key={index} movie={x}/>
        })}
      </div>
    )
  }
}

export default App;
