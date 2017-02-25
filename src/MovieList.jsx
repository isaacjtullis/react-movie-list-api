import React from 'react';
import Movie from './Movie.jsx';

class MovieList extends React.Component{
  constructor(props){
    super(props)
    this.state={
      selectedMovie: null
    };

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(id){
    let movieID = id
    if(id === this.state.selectedMovie){
      this.setState({
        selectedMovie: null
      })
    } else {
      this.setState({
        selectedMovie: movieID
      })
    }
  }

  render(){
    let movies = this.props.movies.map(movie=>{
      let onMovieClick = () => this.handleClick(movie.id);

      let selected;
      if(movie.id === this.state.selectedMovie){
        selected = true
      }
      return(
        <Movie
          key={movie.id}
          title={movie.title}
          overview={movie.overview}
          adult={movie.adult}
          popularity={movie.popularity}
          voteAverage={movie.vote_average}
          votecount={movie.voteCount}
          selected={selected}
          handleClick={onMovieClick}
        />
      )
    })
    return(
      <div className="Row">
        {movies}
      </div>
    )
  }
}

export default MovieList;
