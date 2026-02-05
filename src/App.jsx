import { useEffect, useState } from 'react';
import Header from './assets/components/Header.jsx';
import MovieList from './assets/components/MovieList.jsx';
import MovieCard from './assets/components/MovieCard.jsx';
import './App.css'

const SupermanImageLink = "https://storage.googleapis.com/pod_public/1300/275630.jpg";


function App() {
  const [movies,setMovies] = useState([]);
  const [movieList,setMovieList] = useState("popular");

  const handleListChange = (list) => {
    console.log(list);
    setMovieList(list);
  }

  const fetchMovies = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/"+movieList+"?api_key=f7ec7dbd3da572bed8636b9b394f2a00");
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }

  useEffect(() => {
    fetchMovies()
  }, []);

  useEffect(() => {
    fetchMovies()
  }, [movieList])

  return (
    <>
      <Header handleListChange={handleListChange} />
      <h2>Temp Header</h2>
      <p>Lorem ipsum</p>
      <MovieList title="Popular Movies">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MovieList>
    </>
  )
}

export default App
