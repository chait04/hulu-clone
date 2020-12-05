import React from "react";
import "./VideoCard.css";
import Texttruncate from "react-text-truncate";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const base_url = "https://image.tmdb.org/t/p/original/"; //very important in getting img address

const VideoCard = ({ movie }) => {
  return (
    <div className="videoCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      />
      <Texttruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_name}</h2>
      <p className="videoCard__stats">
        {movie.media_type && `${movie.media_type} .`}
        {movie.release_date || movie.first_air_date}
        <ThumbUpIcon />
        {"  "}
        {movie.vote_count}
      </p>
    </div>
  );
};

export default VideoCard;
