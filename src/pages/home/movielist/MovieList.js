import React from 'react';
import './MovieList.css';
import { Col, Row, Card}  from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const MovieList = ({movieDisplayData, setCurrentMovieNo}) => {

    const history = useHistory();


    function handleMovieClick(no, title) {
        setCurrentMovieNo(no)
        history.push(`/movie-details/${no}`);
    }


    if(Object.keys(movieDisplayData).length !== 0 ) {

        const lst = movieDisplayData.map((movie) => {

            return(
                <Col className="col-xs-12 col-sm-6 col-md-4 d-flex justify-content-center">
                
                    <Card bg="secondary" className="movie-card" style={{ width: '16rem', minHeight: '150px', margin: '20px 0'}} key={movie.No} onClick={() => handleMovieClick(movie.No, movie.Title)}>
                        <Card.Body className="d-flex align-items-center justify-content-center">
                            <Card.Title>{movie.Title.slice(0, -7)}</Card.Title>
                        </Card.Body>

                    </Card>
                </Col>
            );
        })

        return(
            <>
                {lst}
            </>
        )
    }

    else {
        return(
            <Row></Row>
        );
    }

    

}

export default MovieList;