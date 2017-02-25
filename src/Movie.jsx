import React from 'react';

const Movie = (props) => {

  let movieDetails;
  let showMovieDetails = props => {
    if(props.selected){
      movieDetails =
        <div className="col-md-8" onClick={props.handleClick}>
          <h2>{props.overview}</h2>
          <p>Adult: {props.adult}</p>
          <p>Critics review: {props.voteAverage}</p>
          <p>Overall Popularity: {props.popularity}</p>
        </div>;
    }
    return movieDetails;
  }

  return(
    <div className="Row">
      <div className="col-md-12" id={props.id} onClick={props.handleClick}><h1>{props.title}</h1></div>
      {showMovieDetails(props)}
    </div>
  )
}

export default Movie;
/*
{props.overview}
{props.adult}
{props.popularity}
{props.voteAverage}
{props.voteCount}
*/
