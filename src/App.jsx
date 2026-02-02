import { useState } from 'react'
import './App.css'
import AppHeader from './assets/components/Header.jsx';

function App() {
  return (
    <>
      <AppHeader />
      <Container>
        <h2>Temp Header</h2>
        <p>Lorem ipsum</p>
      </Container>
    </>
  )
}

function Container(props) {
  return (
    <div className='mt-4 mb-4 rounded-4xl border-3 border-solid border-orange-100'>
      {props.children}
    </div>
  );
}

export default App
