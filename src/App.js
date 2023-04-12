import React, { useState } from 'react';
import MovieList from './Compoment/MovieList/MovieList';
import Filter from './Compoment/Filter/Filter';

export default function App (){
  const [movies, setMovies] = useState([
    {
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL: 'https://www.imdb.com/title/tt0111161/mediaviewer/rm2062356481/',
      rating: 5,
    },
    {
      title: 'The Godfather',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      posterURL: 'https://www.imdb.com/title/tt0068646/mediaviewer/rm1029899776/',
      rating: 5,
    },
    {
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      posterURL: 'https://www.imdb.com/title/tt0468569/mediaviewer/rm3391565312/',
      rating: 4,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleTitleChange = (event) => {
    setTitleFilter(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRatingFilter(event.target.value);
  };

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      (ratingFilter === '' || movie.rating >= ratingFilter)
  );
  return (
    <div className="app">
      <Filter onTitleChange={handleTitleChange} onRatingChange={handleRatingChange}>
      </Filter>
    </div> );}
