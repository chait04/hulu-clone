import React, { useState, useEffect } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import axios from "./axios";

function Results({ selectedOption }) {
  const [movies, setmovies] = useState([selectedOption]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(selectedOption);
      // console.log(request);
      setmovies(request.data.results);
      return request;
    };

    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Results;
