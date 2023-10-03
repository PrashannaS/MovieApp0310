import React, { useEffect, useState } from "react";
import CusttomCard from "./CusttomCard";

export const Display = ({ movieList, handleOnDelete }) => {
  const [displayMovie, setDisplayMovie] = useState([]);

  useEffect(() => {
    setDisplayMovie(movieList);
  }, [movieList]);

  const movieFilter = (mode) => {
    if (!mode) {
      return setDisplayMovie(movieList);
    }

    const filteredMovie = movieList.filter((movie) => movie.mode === mode);

    setDisplayMovie(filteredMovie);
  };
  return (
    <div className="bg-black p-5 rounded shadow-lg">
      <div className="row gap-2">
        <div className="col-md">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => movieFilter("")}
            >
              All
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => movieFilter("happy")}
            >
              Happy
            </button>
            <button
              type="button"
              className="btn btn-info"
              onClick={() => movieFilter("action")}
            >
              Action
            </button>
          </div>
          <div className="mt-3">{displayMovie.length} movie(s) found!</div>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col d-flex flex-wrap gap-3 justify-content-between">
          {displayMovie.map((itme, i) => (
            <CusttomCard
              key={i}
              movie={itme}
              deleteFun={() => handleOnDelete(itme.imdbID)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Display;
