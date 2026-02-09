import { useEffect, useState } from 'react';
import Header from './assets/components/Header.jsx';
import MovieList from './assets/components/MovieList.jsx';
import MovieCard from './assets/components/MovieCard.jsx';
import './App.css';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movieList, setMovieList] = useState("popular");
  const [listTitle, setListTitle] = useState("Popular Movies");
  const [minRating, setMinRating] = useState(0);
  const [sortType, setSortType] = useState("default");
  const [sortDirection, setSortDirection] = useState("ascending");

  const handleListChange = (list, listName) => {
    setMovieList(list);
    setListTitle(listName);
  }

  const fetchMovies = async () => {
    const fetchURL = `https://api.themoviedb.org/3/movie/${movieList}?api_key=f7ec7dbd3da572bed8636b9b394f2a00`;
    try {
      const response = await fetch(fetchURL);
      const data = await response.json();
      setAllMovies(data.results);
      setFilteredMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }

  const handleMovieFilter = (rating) => {
    let filtered = [];
    if (rating != minRating) {
      setMinRating(rating);
      filtered = allMovies.filter(movie => movie.vote_average >= rating);
    }

    if (filtered.length != 0) {
      setFilteredMovies(filtered);
    }
  }

  const handleSorting = (event) => {
    let value = event.target.value;
    if (event.target.id === "sortTypeDrop") {
      setSortType(value);
    } else if (event.target.id === "sortDirDrop") {
      setSortDirection(value);
    }
  }

  function movieCompare(a, b) {
    if (sortType === "date" && sortDirection === "ascending") {
      if (Date.parse(a.release_date) < Date.parse(b.release_date)) {
        return -1;
      } else if (Date.parse(a.release_date) > Date.parse(b.release_date)) {
        return 1;
      } else {
        return 0;
      }
    } else if (sortType === "date" && sortDirection === "descending") {
      if (Date.parse(a.release_date) < Date.parse(b.release_date)) {
        return 1;
      } else if (Date.parse(a.release_date) > Date.parse(b.release_date)) {
        return -1;
      } else {
        return 0;
      }
    } else if (sortType === "rating" && sortDirection === "ascending") {
      if (a.vote_average < b.vote_average) {
        return -1;
      } else if (a.vote_average > b.vote_average) {
        return 1;
      } else {
        return 0;
      }
    } else if (sortType === "rating" && sortDirection === "descending") {
      if (a.vote_average < b.vote_average) {
        return 1;
      } else if (a.vote_average > b.vote_average) {
        return -1;
      } else {
        return 0;
      }
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [movieList]);

  useEffect(() => {
    const tempFiltered = filteredMovies;
    if (sortType === "default") {
      setFilteredMovies(allMovies.filter(movie => movie.vote_average >= minRating));
    }
    else {
      setFilteredMovies(tempFiltered.toSorted(movieCompare));
    }
  }, [sortType, sortDirection]);

  return (
    <>
      <Header handleListChange={handleListChange} />
      <h2>Temp Header</h2>
      <p>Lorem ipsum</p>
      <MovieList title={listTitle} handleMovieFilter={handleMovieFilter} minRating={minRating} handleSorting={handleSorting}>
        {filteredMovies.length > 0 ? filteredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        )) : <h2 className='my-3'>No movies found matching that filter.</h2>}
      </MovieList>
    </>
  )
}

export default App
