import Home from './pages/home/Home';
import MovieDetails from './pages/moviedetails/MovieDetails';
import {useState, useEffect} from 'react';

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import baseurl from'./config';
import './App.css';

function App() {

  const [genres, setGenres] = useState({});
  const [movieData, setMovieData] = useState({});
  const [currentMovieNo, setCurrentMovieNo] = useState("");

  let currentMovie;

  if(currentMovieNo !== "" && Object.keys(movieData).length !== 0) {
    currentMovie = movieData.filter((item) => item.No===currentMovieNo)[0];
    console.log(currentMovie)
  }

  useEffect(() => {
    fetch(`${baseurl}movies`)
    .then((res) => res.json())
    .then(data => setMovieData(data))
  },[]);

  useEffect(() => {
    fetch(`${baseurl}genres`)
    .then((res) => res.json())
    .then(data => setGenres(data))
  },[]);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/home' component={() => <Home genres={genres} movieData={movieData} setCurrentMovieNo={setCurrentMovieNo} /> } />
          <Route path='/movie-details/:currentMovie' component={() => <MovieDetails currentMovie={currentMovie}/>} />
          <Redirect to='/home'/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
