let api = {
  getMovies(){
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=306bd1f9dda87b11475c98f9d47e3862&language=en-US`
    return fetch(url).then((res)=>res.json());
  }
}

module.exports = api;
