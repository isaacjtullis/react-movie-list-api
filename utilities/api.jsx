let api = {
  getMovies(pageNumber){
    let p = new URLSearchParams();
    p.append('page', pageNumber || 1)
    let url = {`https://api.themoviedb.org/3/movie/now_playing?api_key=306bd1f9dda87b11475c98f9d47e3862&language=en-US?` + p}
    return fetch(url).then((res)=>res.json());
  }
}

module.exports = api;
