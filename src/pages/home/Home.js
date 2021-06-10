import React from 'react';
import './Home.css'
import MovieList from './movielist/MovieList';
import {useState, useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, DropdownButton, Button, Dropdown }  from 'react-bootstrap';

const Home = () => {

  const [genres, setGenres] = useState({});
  const [movieData, setMovieData] = useState({});
  const [currentGenre, setCurrentGenre] = useState("Select Genre");
  const [ratingOrder, setRatingOrder] = useState(0);
  // const [movieDisplayData, setMovieDisplayData] = useState({});

  // console.log(genres);
  // console.log(currentGenre);
  console.log(movieData)

  let movieDisplayData = {};

  if(Object.keys(genres).length !== 0 && Object.keys(movieData).length !== 0) {


    movieDisplayData = movieData.filter((movie) => movie.Genre===currentGenre);
    if(ratingOrder) {
      movieDisplayData.sort((x,y) => x.Rating - y.Rating);
    }
    else {
      movieDisplayData.sort((x,y) => y.Rating - x.Rating);
    }
    console.log(movieDisplayData)
  }

  useEffect(() => {
    fetch("http://localhost:8000/movies")
    .then((res) => res.json())
    .then(data => setMovieData(data))
  },[]);

  useEffect(() => {
    fetch("http://localhost:8000/genres")
    .then((res) => res.json())
    .then(data => setGenres(data))
  },[]);

  if(Object.keys(genres).length !== 0) {

    let genreList = genres.map((item) => {
      return(
        <Dropdown.Item key={item._id} onClick={()=> setCurrentGenre(item.Name)}>{item.Name}</Dropdown.Item>
      );
    });

    return(
      <Container fluid className="d-flex page-div">
        <Container className="content-div">
          <Row className="header">
            <Col className="col-4"><h3>TOP MOVIES BY GENRE</h3></Col>
            <Col className="col-4">
              <DropdownButton id="dropdown-basic-button" title={currentGenre}>
                {genreList}
              </DropdownButton>
            </Col>
            <Col className="col-4">
            <Button variant="primary" size="md" onClick={() => setRatingOrder(!ratingOrder)}>Rating
              <span class="material-icons">{(ratingOrder)? 'arrow_upward': 'arrow_downward'}</span>
            </Button>
            </Col>
          </Row>

          <Row>
            <MovieList movieDisplayData={movieDisplayData}/> 
          </Row>

        </Container>
      </Container>
    );
  }

  else {
    return(<div></div>);
  }
}

export default Home;