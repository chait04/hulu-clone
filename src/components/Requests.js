// require("dotenv").config();
const REACT_APP_API_KEY = ""; //You Should save API key in .env file.

export default {
  fetchTrending: `/trending/all/week?api_key=${REACT_APP_API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${REACT_APP_API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${REACT_APP_API_KEY}&language=en-US&with_geners=28`,
  fetchComedyMovies: `/discover/movie?api_key=${REACT_APP_API_KEY}&language=en-US&with_geners=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${REACT_APP_API_KEY}&language=en-US&with_geners=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${REACT_APP_API_KEY}&language=en-US&with_geners=10749`,
  fetchMystery: `/discover/movie?api_key=${REACT_APP_API_KEY}&language=en-US&with_geners=9648`,
  fetchSciFi: `/discover/movie?api_key=${REACT_APP_API_KEY}&language=en-US&with_geners=878`,
  fetchWestern: `/discover/movie?api_key=${REACT_APP_API_KEY}&language=en-US&with_geners=37`,
  fetchAnimation: `/discover/movie?api_key=${REACT_APP_API_KEY}&language=en-US&with_geners=16`,
  fetchTV: `/discover/movie?api_key=${REACT_APP_API_KEY}&language=en-US&with_geners=10770`,
};
