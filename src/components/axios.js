import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3", //created base url to make everything easy
});

export default instance;
