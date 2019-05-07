import React from "react";
import { uid } from "react-uid";
import "./Board.css";
import fakeMoviesJson from "../../texts/fakeData";

function Board() {
  const Movie = ({ id, rank, title }) => (
    <div className="movie" key={uid(title)} data-testid="movie">
      <div>{id}</div>
      <div>{rank}</div>
      <div>{title}</div>
    </div>
  );

  return (
    <div className="board" data-testid="board">
      <div className="movies" data-testid="movies-container">
        {fakeMoviesJson && fakeMoviesJson.map(movie => Movie(movie))}
      </div>
    </div>
  );
}

export default Board;
