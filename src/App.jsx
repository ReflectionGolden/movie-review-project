import { useState } from 'react'
import Header from './assets/components/Header.jsx';
import MovieList from './assets/components/MovieList.jsx';
import MovieCard from './assets/components/MovieCard.jsx';
import './App.css'

const SupermanImageLink = "https://storage.googleapis.com/pod_public/1300/275630.jpg";

function App() {
  return (
    <>
      <Header />
      <h2>Temp Header</h2>
      <p>Lorem ipsum</p>
      <MovieList title="Recent Movies">
        <MovieCard
          title="Superman"
          image={SupermanImageLink}
          description="Superman must reconcile his alien Kryptonian heritage with his human upbringing as reporter Clark Kent. As the embodiment of truth, justice and the American way he soon finds himself in a world that views these as old-fashioned."
          rating="7.1"
          date="2/07/2025"
        />
      </MovieList>
    </>
  )
}

export default App
