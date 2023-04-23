import React, { useState } from "react";
import MovieList from "./Compoment/MovieList/MovieList";
import Filter from "./Compoment/Filter/Filter";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Godfather",
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      posterURL: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
      rating: 9.2,
    },
    {
      id: 2,
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterURL: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
      rating: 9.3,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const handleTitleFilterChange = (value) => {
    setTitleFilter(value);
  };

  const handleRatingFilterChange = (value) => {
    setRatingFilter(value);
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(titleFilter.toLowerCase()) && movie.rating >= ratingFilter;
  });

  return (
    <div className="app">
      <Filter
        titleFilter={titleFilter}
        ratingFilter={ratingFilter}
        onTitleFilterChange={handleTitleFilterChange}
        onRatingFilterChange={handleRatingFilterChange}
      />
      <MovieList movies={filteredMovies} />
      <h2>Add a New Movie</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        const newMovie = {
          id: Math.random(),
          title: e.target.title.value,
          description: e.target.description.value,
          posterURL: e.target.posterURL.value,
          rating: Number(e.target.rating.value),
        };
        handleAddMovie(newMovie);
        e.target.reset();
      }}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea className="form-control" id="description" rows="3"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="posterURL">Poster URL</label>
          <input type="text" className="form-control" id="posterURL" />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input type="number" className="form-control" id="rating" min="0" max="10" />
        </div>
        <button type="submit" className="btn btn-primary">Add Movie</button>
      </form>
    </div>
  );
};

export default App;