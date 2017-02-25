import React, {Component} from 'react';
import api from './test/api.jsx';
import MovieList from './MovieList.jsx'
import {Pagination} from 'react-bootstrap';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [],
      MovieName: "",
      currentPageNumber: 1,
      totalItems: 1,
      itemsPerPage: 10
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  getMoviePosts(pageNumber){
    api.getMovies(pageNumber).then((res)=>{
      this.setState({
        movies: res.results,
        currentPageNumber: res.currentPageNumber,
        totalItems: res.totalItems,
        itemsPerPage: res.itemsPerPage
      })
    });
  }
  componentWillMount(){
    this.getMoviePosts(1)
  }

  handleSelect(number){
    this.setState({currentPageNumber: number});
  }

  render() {
    let totalPages = Math.ceil(this.state.totalItems / this.state.itemsPerPage);
    return (
      <div className="Row">
        <div className="banner">
          <h1>Welcome to Movie Circus!</h1>
        </div>
        <div><MovieList movies={this.state.movies}/></div>
      </div>
    );
  }
}
export default App;

/*
return fetch("https://developers.themoviedb.org/3/movies")
.then((response)=> response.json())
.then((responseJson)=>{
  return responseJson.movies
  debugger
})
.catch((error)=>{
  console.error(error);
})
*/
