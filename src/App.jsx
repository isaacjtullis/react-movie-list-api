import React, {Component} from 'react';
import api from './test/api.jsx';
import MovieList from './MovieList.jsx'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [],
    }
  }

  getMoviePosts(){
    api.getMovies().then((res)=>{
      this.setState({
        movies: res.results
      })
    });
  }
  componentWillMount(){
    this.getMoviePosts()
  }

  render() {
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
