import React, { useEffect, useRef, useState } from "react";
import { fetchMovie } from "../utils/axiosHelper";
import { randomCharGenerator } from "../utils/randomStr";
import CusttomCard from "./CusttomCard";

export const SearchForm = ({ addToMovieList }) => {
  const [movie, setMovie] = useState({});
  const strRef = useRef("");
  const [error, setError] = useState("");

  useEffect(() => {
    const randChar = randomCharGenerator();

    //IEFE
    (async () => {
      const randMovie = await fetchMovie(randChar);
      setMovie(randMovie);
    })();

    // setMovie(randMovie);
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setMovie({});
    setError("");
    const str = strRef.current.value;

    const data = await fetchMovie(str);

    if (data.Response === "True") {
      setMovie(data);
    } else {
      setError(data.Error);
    }
  };

  const func = (mode) => {
    addToMovieList({ ...movie, mode });
    setMovie({});
    strRef.current.value = "";
  };

  const handleOnDelete = () => {
    setMovie({});
  };
  return (
    <div className="bg-black p-5 rounded shadow-lg">
      <div className="row gap-2">
        <div className="col-md">
          <form onSubmit={handleOnSubmit}>
            <div class="mb-3">
              <input
                ref={strRef}
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Search movie name ..."
              />
            </div>

            <div className="d-grid">
              <button type="submit" class="btn btn-warning">
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="col-md d-flex justify-content-center">
          {error && <div className="alert alert-danger">{error}</div>}

          {movie?.imdbID && (
            <CusttomCard movie={movie} func={func} deleteFun={handleOnDelete} />
          )}
        </div>
      </div>
    </div>
  );
};
