import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import { SearchForm } from "./components/SearchForm";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [dMovie, setDmovie] = useState([]);

  const addToMovieList = (movie) => {
    const dupli = movieList.filter((item) => item.imdbID !== movie.imdbID);
    setMovieList([...dupli, movie]);
  };

  const handleOnDelete = (id) => {
    const mov = movieList.filter(({ imdbID }) => imdbID !== id);
    setMovieList(mov);
    // setDMovie(mov);
  };

  // const movieFilter = (mode) => {
  //   if (!mode) {
  //     return setDmovie(movieList);
  //   }
  //   setDmovie(movieList.filter((itm) => itm.mood === mode));
  // };
  return (
    <div className="wrappper bg-dark text-warning vh-100">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="mt-5 text-center">My Movies</h1>
          </div>
        </div>
        {/* title */}
        {/* search area  */}
        {/* form */}
        {/* card */}
        <span>
          <SearchForm addToMovieList={addToMovieList} />
        </span>

        {/* movie list section  */}
        {/* buttons  */}
        {/* cards  */}
        <div>
          <Display movieList={movieList} handleOnDelete={handleOnDelete} />
        </div>
      </div>
    </div>
  );
}

export default App;
