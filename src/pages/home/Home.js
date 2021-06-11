import React from 'react';
import './Home.css'
import MovieList from './movielist/MovieList';
import {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, DropdownButton, Button, Dropdown }  from 'react-bootstrap';

const Home = ({genres, movieData, setCurrentMovieNo}) => {

  const [currentGenre, setCurrentGenre] = useState("All");
  const [ratingOrder, setRatingOrder] = useState(0);

  let movieDisplayData = {};

  if(Object.keys(genres).length !== 0 && Object.keys(movieData).length !== 0) {

    if(currentGenre === "All") {
      movieDisplayData = movieData;
    }

    else {
      movieDisplayData = movieData.filter((movie) => movie.Genre===currentGenre);
    }

    if(ratingOrder) {
      movieDisplayData.sort((x,y) => x.Rating - y.Rating);
    }
    else {
      movieDisplayData.sort((x,y) => y.Rating - x.Rating);
    }
  }

  if(Object.keys(genres).length !== 0) {

    let genreList = genres.map((item) => {
      return(
        <Dropdown.Item key={item._id} onClick={()=> setCurrentGenre(item.Name)}>{item.Name}</Dropdown.Item>
      );
    });

    return(
      <Container fluid className="d-flex page-div">
        <Container className="content-div">
          <Row className="header mb-2">
            <Col className="col-12 col-md-4 mb-2"><h3>TOP MOVIES BY GENRE</h3></Col>
            <Col className="col-12 col-md-4 mb-2">
              <DropdownButton variant="secondary" id="dropdown-basic-button" title={currentGenre} size="lg">
                <Dropdown.Item onClick={()=> setCurrentGenre("All")}>All</Dropdown.Item>
                {genreList}
              </DropdownButton>
            </Col>
            <Col className="col-12 col-md-4 mb-2">
              <Button variant="secondary" size="lg" onClick={() => setRatingOrder(!ratingOrder)}>
                <span>Rating</span>
                <span class="material-icons">{(ratingOrder)? 'arrow_upward': 'arrow_downward'}</span>
              </Button>
            </Col>
          </Row>

          <Row>
            <MovieList 
              movieDisplayData={movieDisplayData} 
              setCurrentMovieNo={setCurrentMovieNo}
            /> 
          </Row>

        </Container>
      </Container>
    );
  }

  else {
    return(<div>hello</div>);
  }
}

export default Home;